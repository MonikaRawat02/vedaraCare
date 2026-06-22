import dbConnect from "../../../lib/database";
import Blog from "../../../models/blog";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;
  const { id, paramlink, action } = req.query;

  switch (method) {
    case "PATCH":
      try {
        let blog;
        if (id) {
          blog = await Blog.findOne({ _id: id, status: "published" });
        } else if (paramlink) {
          blog = await Blog.findOne({ paramlink, status: "published" });
        }
        if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
        
        if (action === "like") {
          const { visitorId } = req.body || {};
          if (!visitorId || typeof visitorId !== "string") {
            return res.status(400).json({ success: false, message: "visitorId required" });
          }
          if (blog.likes.includes(visitorId)) {
            return res.status(200).json({ success: true, likesCount: blog.likesCount, dislikesCount: blog.dislikesCount });
          }
          // If previously disliked, remove and decrement
          if (blog.dislikes.includes(visitorId)) {
            await Blog.findByIdAndUpdate(
              blog._id,
              { $pull: { dislikes: visitorId }, $inc: { dislikesCount: -1 } }
            );
          }
          const updated = await Blog.findByIdAndUpdate(
            blog._id,
            { $addToSet: { likes: visitorId }, $inc: { likesCount: 1 } },
            { new: true }
          );
          return res.status(200).json({ success: true, likesCount: updated.likesCount, dislikesCount: updated.dislikesCount });
        }

        if (action === "dislike") {
          const { visitorId } = req.body || {};
          if (!visitorId || typeof visitorId !== "string") {
            return res.status(400).json({ success: false, message: "visitorId required" });
          }
          if (blog.dislikes.includes(visitorId)) {
            return res.status(200).json({ success: true, likesCount: blog.likesCount, dislikesCount: blog.dislikesCount });
          }
          // If previously liked, remove and decrement
          if (blog.likes.includes(visitorId)) {
            await Blog.findByIdAndUpdate(
              blog._id,
              { $pull: { likes: visitorId }, $inc: { likesCount: -1 } }
            );
          }
          const updated = await Blog.findByIdAndUpdate(
            blog._id,
            { $addToSet: { dislikes: visitorId }, $inc: { dislikesCount: 1 } },
            { new: true }
          );
          return res.status(200).json({ success: true, likesCount: updated.likesCount, dislikesCount: updated.dislikesCount });
        }
        
        if (action === "comment") {
          const { content, userName, userEmail, parentId } = req.body || {};
          if (!content || typeof content !== "string" || !content.trim()) {
            return res.status(400).json({ success: false, message: "Comment content is required" });
          }
          const commentDoc = {
            _id: new (require("mongoose")).Types.ObjectId(),
            userName: userName || "Anonymous",
            userEmail: userEmail || "",
            content: content.trim(),
            parentId: parentId || null,
            approved: true,
            createdAt: new Date(),
          };
          const updated = await Blog.findByIdAndUpdate(
            blog._id,
            { $push: { comments: commentDoc } },
            { new: true }
          );
          return res.status(201).json({ success: true, comment: commentDoc, commentsCount: updated.comments.length });
        }
        
        if (action === "view") {
          const { visitorId } = req.body || {};
          if (!visitorId || typeof visitorId !== "string") {
            return res.status(400).json({ success: false, message: "visitorId required" });
          }
          const already = blog.views.includes(visitorId);
          if (already) {
            return res.status(200).json({ success: true, viewsCount: blog.viewsCount });
          }
          const updated = await Blog.findByIdAndUpdate(
            blog._id,
            { $addToSet: { views: visitorId }, $inc: { viewsCount: 1 } },
            { new: true }
          );
          return res.status(200).json({ success: true, viewsCount: updated.viewsCount });
        }
        
        return res.status(400).json({ success: false, message: "Invalid action" });
      } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
      }
      
    case "GET":
      try {
        if (id) {
          const blog = await Blog.findById(id).populate("postedBy", "name username");
          if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
          return res.status(200).json({ success: true, blog });
        } else if (paramlink) {
          const blog = await Blog.findOne({ paramlink, status: "published" })
            .populate("postedBy", "name username");
          if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
          return res.status(200).json({ success: true, blog });
        } else {
          const blogs = await Blog.find({ status: "published" })
            .populate("postedBy", "name username")
            .select("-views -likes -dislikes") // Exclude large arrays from list view
            .sort({ createdAt: -1 });
          return res.status(200).json({ success: true, blogs });
        }
      } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
      }

    case "POST":
      try {
        const User = mongoose.models.User || mongoose.model("User");
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
          return res.status(401).json({ message: "No token provided" });
        }
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);
        if (!user || user.role !== "admin") {
          return res.status(403).json({ message: "Access denied" });
        }
        const { title, content, paramlink } = req.body;
        const { draftId } = req.query;

        if (draftId) {
          const draft = await Blog.findOne({ _id: draftId, status: "draft" });
          if (!draft) {
            return res.status(404).json({ success: false, message: "Draft not found" });
          }

          const finalParamlink = paramlink || draft.paramlink;
          const conflict = await Blog.findOne({ paramlink: finalParamlink, status: "published" });
          if (conflict) {
            return res.status(400).json({ success: false, message: "A published blog with this URL already exists." });
          }

          const publishedBlog = await Blog.findOneAndUpdate(
            { _id: draftId, status: "draft" },
            {
              title,
              content,
              paramlink: finalParamlink,
              status: "published",
            },
            { new: true, runValidators: true }
          );

          if (!publishedBlog) {
            return res.status(404).json({ success: false, message: "Draft not found" });
          }
          return res.status(200).json({ success: true, blog: publishedBlog });
        } else {
          const conflict = await Blog.findOne({ paramlink, status: "published" });
          if (conflict) {
            return res.status(400).json({ success: false, message: "A published blog with this URL already exists." });
          }
          const newBlog = await Blog.create({
            title,
            content,
            paramlink,
            status: "published",
            postedBy: user._id,
          });
          return res.status(201).json({ success: true, blog: newBlog });
        }
      } catch (error) {
        if (error.code === 11000) {
          return res.status(409).json({ success: false, message: "Duplicate key error", error: error.message });
        }
        return res.status(500).json({ success: false, message: error.message });
      }

    case "PUT":
      try {
        const User = mongoose.models.User || mongoose.model("User");
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
          return res.status(401).json({ message: "No token provided" });
        }
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);
        if (!user || user.role !== "admin") {
          return res.status(403).json({ message: "Access denied" });
        }
        if (!id) return res.status(400).json({ success: false, message: "Blog ID required" });

        const { title, content, paramlink, status } = req.body;
        if (status === "published" || typeof status === "undefined") {
          const existingBlog = await Blog.findOne({
            paramlink,
            status: "published",
            _id: { $ne: id },
          });
          if (existingBlog) {
            return res.status(400).json({ success: false, message: "A published blog with this URL already exists." });
          }
        }

        const updateFields = { title, content, paramlink };
        if (typeof status !== "undefined") {
          updateFields.status = status;
        }
        const updatedBlog = await Blog.findByIdAndUpdate(
          id,
          updateFields,
          { new: true, runValidators: true }
        );

        if (!updatedBlog) return res.status(404).json({ success: false, message: "Blog not found" });
        return res.status(200).json({ success: true, blog: updatedBlog });
      } catch (error) {
        if (error.code === 11000) {
          return res.status(409).json({ success: false, message: "Duplicate key error", error: error.message });
        }
        return res.status(500).json({ success: false, message: error.message });
      }

    case "DELETE":
      try {
        const User = mongoose.models.User || mongoose.model("User");
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
          return res.status(401).json({ message: "No token provided" });
        }
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);
        if (!user || user.role !== "admin") {
          return res.status(403).json({ message: "Access denied" });
        }
        if (!id) return res.status(400).json({ success: false, message: "Blog ID required" });
        const deletedBlog = await Blog.findByIdAndDelete(id);
        if (!deletedBlog) return res.status(404).json({ success: false, message: "Blog not found" });
        return res.status(200).json({ success: true, message: "Blog deleted successfully" });
      } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
      }

    default:
      return res.status(405).json({ success: false, message: "Method not allowed" });
  }
}

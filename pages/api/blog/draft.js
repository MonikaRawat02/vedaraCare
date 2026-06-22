import dbConnect from "../../../lib/database";
import Blog from "../../../models/blog";
import User from "../../../models/user";
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

  // Authentication
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  let user;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    user = await User.findById(decoded.userId);
    if (!user || user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      try {
        if (id) {
          // Get single draft
          const draft = await Blog.findOne({ _id: id, status: "draft" }).populate("postedBy", "name username");
          if (!draft) return res.status(404).json({ success: false, message: "Draft not found" });
          return res.status(200).json({ success: true, draft });
        } else {
          // List all drafts
          const drafts = await Blog.find({ status: "draft" })
            .populate("postedBy", "name username")
            .sort({ updatedAt: -1 });
          return res.status(200).json({ success: true, drafts });
        }
      } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
      }

    case "POST":
      try {
        const { title, content, paramlink, isAutoSave } = req.body;
        
        // Basic validation (looser for drafts)
        // paramlink is required by schema, but title/content can be emptyish for drafts
        if (!paramlink) {
             return res.status(400).json({ success: false, message: "Paramlink is required" });
        }

        // Check if paramlink exists (even for drafts, to avoid future conflicts)
        // Although schema only enforces uniqueness for published, it's good practice to check
        // But for drafts, we might allow duplicates?
        // Schema says: unique: true, partialFilterExpression: { status: "published" }
        // So drafts CAN have duplicate paramlinks.
        // However, if we eventually publish, we need it unique.
        
        const newDraft = await Blog.create({
          title: title || "Untitled Draft",
          content: content || "",
          paramlink,
          status: "draft",
          postedBy: user._id,
        });
        
        return res.status(201).json({ success: true, draft: newDraft });
      } catch (error) {
        // Check for duplicate key error (if any)
        if (error.code === 11000) {
            return res.status(409).json({ success: false, message: "Duplicate key error", error: error.message });
        }
        return res.status(500).json({ success: false, message: error.message });
      }

    case "PUT":
      try {
        if (!id) return res.status(400).json({ success: false, message: "Draft ID required" });
        
        const { title, content, paramlink } = req.body;
        
        const updatedDraft = await Blog.findOneAndUpdate(
          { _id: id, status: "draft" },
          {
            title: title || "Untitled Draft",
            content: content,
            paramlink
          },
          { new: true, runValidators: true }
        );

        if (!updatedDraft) return res.status(404).json({ success: false, message: "Draft not found" });
        return res.status(200).json({ success: true, draft: updatedDraft });
      } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
      }

    case "DELETE":
      try {
        if (!id) return res.status(400).json({ success: false, message: "Draft ID required" });
        
        const deletedDraft = await Blog.findOneAndDelete({ _id: id, status: "draft" });
        
        if (!deletedDraft) return res.status(404).json({ success: false, message: "Draft not found" });
        return res.status(200).json({ success: true, message: "Draft deleted successfully" });
      } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
      }

    default:
        return res.status(405).json({ success: false, message: "Method not allowed" });
  }
}

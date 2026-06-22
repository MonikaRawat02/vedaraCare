import mongoose from "mongoose";

/* -------------------- Blog Schema -------------------- */
const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    content: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
      index: true,
    },

    paramlink: {
      type: String,
      required: true,
      trim: true,
    },

    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    likesCount: {
      type: Number,
      default: 0,
    },
    
    dislikesCount: {
      type: Number,
      default: 0,
    },

    viewsCount: {
      type: Number,
      default: 0,
    },

    likes: {
      type: [String],
      default: [],
    },
    
    dislikes: {
      type: [String],
      default: [],
    },

    views: {
      type: [String],
      default: [],
    },

    comments: [
      {
        _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
        userName: { type: String, default: "" },
        userEmail: { type: String, default: "" },
        content: { type: String, required: true, trim: true },
        parentId: { type: mongoose.Schema.Types.ObjectId, default: null },
        approved: { type: Boolean, default: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],

    topics: {
      type: [String],
      default: [],
    },

  },
  { timestamps: true }
);

/* -------------------- Indexes -------------------- */

/* Slug must be unique only when published */
BlogSchema.index(
  { paramlink: 1 },
  {
    unique: true,
    partialFilterExpression: { status: "published" },
  }
);

/* -------------------- Export -------------------- */
// Import User model to ensure it's registered before Blog uses .populate()
import "./user";

delete mongoose.models.Blog;
export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

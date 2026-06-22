import dbConnect from "../../../lib/database";
import User from "../../../models/user";
import Blog from "../../../models/blog";
import Appointment from "../../../models/appointment";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await dbConnect();

    // Authentication
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");

    if (!user || user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    // Fetch statistics
    const [
      totalUsers,
      totalBlogPosts,
      publishedBlogs,
      draftBlogs,
      recentUsers,
      recentBlogs,
      recentAppointments,
      totalAppointments,
      newAppointments,
      contactedAppointments,
      scheduledAppointments
    ] = await Promise.all([
      // Total users (excluding admins)
      User.countDocuments({ role: "user" }),
      
      // Total blog posts
      Blog.countDocuments(),
      
      // Published blogs
      Blog.countDocuments({ status: "published" }),
      
      // Draft blogs
      Blog.countDocuments({ status: "draft" }),
      
      // Recent users (last 7 days)
      User.find({ role: "user" })
        .sort({ createdAt: -1 })
        .limit(5)
        .select("name email createdAt"),
      
      // Recent blog posts (last 7 days)
      Blog.find()
        .populate("postedBy", "name")
        .sort({ createdAt: -1 })
        .limit(5)
        .select("title status createdAt postedBy"),
      
      // Recent appointments (last 10)
      Appointment.find()
        .sort({ createdAt: -1 })
        .limit(10)
        .select("fullName phone email concern additionalInfo status createdAt notes preferredDate source"),
      
      // Total appointments
      Appointment.countDocuments(),
      
      // New appointments
      Appointment.countDocuments({ status: "new" }),
      
      // Contacted appointments
      Appointment.countDocuments({ status: "contacted" }),
      
      // Scheduled appointments
      Appointment.countDocuments({ status: "scheduled" })
    ]);

    // Calculate growth percentages (simplified - comparing to previous period)
    const stats = {
      totalUsers,
      totalBlogPosts,
      publishedBlogs,
      draftBlogs,
      recentUsers,
      recentBlogs,
      
      // Appointment data
      appointments: recentAppointments,
      totalAppointments,
      new: newAppointments,
      contacted: contactedAppointments,
      scheduled: scheduledAppointments,
      
      // Growth percentages (mock data for now - you can implement real logic)
      usersGrowth: 12.5,
      blogsGrowth: 8.3,
      publishedGrowth: 15.2,
      draftGrowth: -2.1
    };

    res.status(200).json({
      success: true,
      stats
    });

  } catch (error) {
    console.error("Dashboard API Error:", error);
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

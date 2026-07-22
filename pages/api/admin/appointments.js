import dbConnect from "../../../lib/database";
import User from "../../../models/user";
import Appointment from "../../../models/appointment";
import jwt from "jsonwebtoken";

async function authenticate(req, res) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ success: false, message: "No token provided" });
    return null;
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");

    if (!user || user.role !== "admin") {
      res.status(403).json({ success: false, message: "Access denied" });
      return null;
    }
    return user;
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid or expired token" });
    return null;
  }
}

export default async function handler(req, res) {
  await dbConnect();
  const adminUser = await authenticate(req, res);
  if (!adminUser) return;

  const { method } = req;

  if (method === "GET") {
    try {
      const { status, search } = req.query;
      let query = {};

      if (status && status !== "all") {
        query.status = status;
      }

      if (search) {
        query.$or = [
          { fullName: { $regex: search, $options: "i" } },
          { phone: { $regex: search, $options: "i" } },
          { email: { $regex: search, $options: "i" } },
          { concern: { $regex: search, $options: "i" } },
          { source: { $regex: search, $options: "i" } },
          { additionalInfo: { $regex: search, $options: "i" } }
        ];
      }

      const appointments = await Appointment.find(query).sort({ createdAt: -1 });

      const stats = {
        total: await Appointment.countDocuments(),
        new: await Appointment.countDocuments({ status: "new" }),
        contacted: await Appointment.countDocuments({ status: "contacted" }),
        scheduled: await Appointment.countDocuments({ status: "scheduled" }),
        completed: await Appointment.countDocuments({ status: "completed" }),
        cancelled: await Appointment.countDocuments({ status: "cancelled" })
      };

      return res.status(200).json({
        success: true,
        appointments,
        stats
      });
    } catch (error) {
      console.error("GET Appointments error:", error);
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  if (method === "PATCH" || method === "PUT") {
    try {
      const { id, status, notes } = req.body;
      if (!id) {
        return res.status(400).json({ success: false, message: "Appointment ID is required" });
      }

      let updateFields = {};
      if (status) updateFields.status = status;
      if (notes !== undefined) updateFields.notes = notes;

      const updated = await Appointment.findByIdAndUpdate(
        id,
        { $set: updateFields },
        { new: true }
      );

      if (!updated) {
        return res.status(404).json({ success: false, message: "Appointment not found" });
      }

      return res.status(200).json({
        success: true,
        message: "Appointment updated successfully",
        appointment: updated
      });
    } catch (error) {
      console.error("PATCH Appointment error:", error);
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  if (method === "DELETE") {
    try {
      const { id } = req.query;
      if (!id) {
        return res.status(400).json({ success: false, message: "Appointment ID is required" });
      }

      await Appointment.findByIdAndDelete(id);
      return res.status(200).json({
        success: true,
        message: "Appointment deleted successfully"
      });
    } catch (error) {
      console.error("DELETE Appointment error:", error);
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  return res.status(405).json({ success: false, message: "Method not allowed" });
}

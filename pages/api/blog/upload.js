import formidable from "formidable";
import path from "path";
import fs from "fs";
import jwt from "jsonwebtoken";
import User from "../../../models/user";
import dbConnect from "../../../lib/database";

export const config = {
  api: {
    bodyParser: false,
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
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user || user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const uploadDir = path.join(process.cwd(), "uploads");
    
    // Ensure directory exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const form = formidable({
      uploadDir,
      keepExtensions: true,
      maxFileSize: 5 * 1024 * 1024,
      filename: (name, ext, part) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        return uniqueSuffix + path.extname(part.originalFilename || '');
      },
    });

    const [fields, files] = await form.parse(req);
    
    // files.file is usually an array in formidable v3
    const file = files.file?.[0] || files.file;

    if (!file) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    const fileName = path.basename(file.filepath);
    const publicUrl = `/images/uploads/${fileName}`;

    return res.status(200).json({ success: true, url: publicUrl });
  } catch (error) {
    console.error("Upload error:", error);
    return res.status(500).json({ success: false, message: "File upload failed" });
  }
}

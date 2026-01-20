import express from "express";
import fs from "fs";
import path from "path";
import upload from "../middleware/upload.middleware.js";
import uniqueEmail from "../middleware/uniqueEmail.middleware.js";
import cloudinary from "../config/cloudinary.config.js";

const router = express.Router();
const DB_PATH = path.join(process.cwd(),"db.json");

function readDB() {
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify({ users: [] }, null, 2));
  }
  return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
}

function writeDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// POST /users/signup (multipart/form-data)
router.post("/signup", upload, uniqueEmail, async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate fields
    if (!name || !email || !password) {
      return res.status(400).json({ error: "name, email, and password are required" });
    }

    // Multer ensures req.file exists for images
    if (!req.file) {
      return res.status(400).json({ error: "Profile image is required" });
    }

    // Upload to Cloudinary using buffer
    const uploadResult = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "masai-users", resource_type: "image" },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      stream.end(req.file.buffer);
    });

    const db = readDB();
    const nextId = db.users.length ? db.users[db.users.length - 1].id + 1 : 1;

    const newUser = {
      id: nextId,
      name,
      email,
      profilePic: uploadResult.secure_url
    };

    db.users.push(newUser);
    writeDB(db);

    return res.status(201).json({
      message: "User registered successfully",
      user: newUser
    });
  } catch (err) {
    // Multer file type/size errors or Cloudinary errors
    const msg =
      err?.message?.includes("image") || err?.message?.includes("File too large")
        ? err.message
        : "Failed to register user";
    return res.status(500).json({ error: msg });
  }
});

export default router;
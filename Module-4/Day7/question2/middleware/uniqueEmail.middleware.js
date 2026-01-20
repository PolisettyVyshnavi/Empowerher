import fs from "fs";
import path from "path";

const DB_PATH = path.join(process.cwd(), "db.json");

export default function uniqueEmail(req, res, next) {
  try {
    const { email } = req.body;
    if (!email || typeof email !== "string") {
      return res.status(400).json({ error: "Email is required and must be a string" });
    }
    const db = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
    const exists = db.users?.some((u) => u.email.toLowerCase() === email.toLowerCase());
    if (exists) {
      return res.status(409).json({ error: "Email already exists" });
    }
    next();
  } catch (err) {
    return res.status(500).json({ error: "Internal server error (email check)" });
  }
}
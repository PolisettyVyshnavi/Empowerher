import express from "express";
import fs from "fs/promises";
import path from "path";

const router = express.Router();

// ✅ CORRECT PATH
const DB_FILE = path.join(process.cwd(),  "db.json");


// DEBUG (optional, but keep for now)
console.log("DB FILE PATH:", DB_FILE);

const readDB = async () => {
  const data = await fs.readFile(DB_FILE, "utf-8");
  return JSON.parse(data);
};

/* GET ALL USERS */
router.get("/", async (req, res) => {
  try {
    const db = await readDB();
    res.status(200).json(db.users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

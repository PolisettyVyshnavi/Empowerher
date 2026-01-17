import express from "express";
import fs from "fs/promises";
import path from "path";

const router = express.Router();

// ✅ Correct DB path (db.json is inside src)
const DB_FILE = path.join(process.cwd(), "db.json");

// ---------- Helper functions ----------
const readDB = async () => {
  const data = await fs.readFile(DB_FILE, "utf-8");
  return JSON.parse(data);
};

const writeDB = async (data) => {
  await fs.writeFile(DB_FILE, JSON.stringify(data, null, 2));
};

// ---------- GET all users ----------
router.get("/", async (req, res) => {
  try {
    const db = await readDB();
    res.status(200).json(db.users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------- GET single user ----------
router.get("/:userId", async (req, res) => {
  try {
    const userId = Number(req.params.userId);
    const db = await readDB();

    const user = db.users.find((u) => u.id === userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------- ADD user ----------
router.post("/add", async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    const db = await readDB();

    const newUser = {
      id: Date.now(),
      name,
      email
    };

    db.users.push(newUser);
    await writeDB(db);

    res.status(201).json({
      message: "User added successfully",
      user: newUser
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------- UPDATE user ----------
router.put("/update/:userId", async (req, res) => {
  try {
    const userId = Number(req.params.userId);
    const db = await readDB();

    const user = db.users.find((u) => u.id === userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { name, email } = req.body;
    if (name) user.name = name;
    if (email) user.email = email;

    await writeDB(db);

    res.status(200).json({
      message: "User updated successfully",
      user
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------- DELETE user ----------
router.delete("/delete/:userId", async (req, res) => {
  try {
    const userId = Number(req.params.userId);
    const db = await readDB();

    const index = db.users.findIndex((u) => u.id === userId);
    if (index === -1) {
      return res.status(404).json({ message: "User not found" });
    }

    const deletedUser = db.users.splice(index, 1);
    await writeDB(db);

    res.status(200).json({
      message: "User deleted successfully",
      user: deletedUser[0]
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

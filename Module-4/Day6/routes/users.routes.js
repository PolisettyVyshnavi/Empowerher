import express from "express";
import fs from "fs/promises";

const router = express.Router();
const DB_FILE = "./src/db.json";

// Helpers
const readDB = async () => JSON.parse(await fs.readFile(DB_FILE, "utf-8"));
const writeDB = async (data) =>
  fs.writeFile(DB_FILE, JSON.stringify(data, null, 2));

/* -------------------- ADD USER -------------------- */
router.post("/add", async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email)
    return res.status(400).json({ message: "All fields required" });

  const db = await readDB();

  const newUser = {
    id: Date.now(),
    name,
    email
  };

  db.users.push(newUser);
  await writeDB(db);

  res.status(201).json({ message: "User added", user: newUser });
});

/* -------------------- GET ALL USERS -------------------- */
router.get("/", async (req, res) => {
  const db = await readDB();
  res.status(200).json(db.users);
});

/* -------------------- GET SINGLE USER -------------------- */
router.get("/:userId", async (req, res) => {
  const userId = Number(req.params.userId);
  const db = await readDB();

  const user = db.users.find(u => u.id === userId);
  if (!user)
    return res.status(404).json({ message: "User not found" });

  res.status(200).json(user);
});

/* -------------------- UPDATE USER -------------------- */
router.put("/update/:userId", async (req, res) => {
  const userId = Number(req.params.userId);
  const db = await readDB();

  const user = db.users.find(u => u.id === userId);
  if (!user)
    return res.status(404).json({ message: "User not found" });

  Object.assign(user, req.body);
  await writeDB(db);

  res.status(200).json({ message: "User updated", user });
});

/* -------------------- DELETE USER -------------------- */
router.delete("/delete/:userId", async (req, res) => {
  const userId = Number(req.params.userId);
  const db = await readDB();

  const index = db.users.findIndex(u => u.id === userId);
  if (index === -1)
    return res.status(404).json({ message: "User not found" });

  const deletedUser = db.users.splice(index, 1);
  await writeDB(db);

  res.status(200).json({ message: "User deleted", user: deletedUser[0] });
});

export default router;

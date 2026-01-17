import express from "express";
import fs from "fs/promises";

const router = express.Router();
const DB_FILE = "./src/db.json";

// Helpers
const readDB = async () => JSON.parse(await fs.readFile(DB_FILE, "utf-8"));
const writeDB = async (data) =>
  fs.writeFile(DB_FILE, JSON.stringify(data, null, 2));

/* -------------------- ADD TODO -------------------- */
router.post("/add", async (req, res) => {
  const { title, completed } = req.body;

  if (!title)
    return res.status(400).json({ message: "Title is required" });

  const db = await readDB();

  const newTodo = {
    id: Date.now(),
    title,
    completed: completed ?? false
  };

  db.todos.push(newTodo);
  await writeDB(db);

  res.status(201).json({ message: "Todo added", todo: newTodo });
});

/* -------------------- GET ALL TODOS -------------------- */
router.get("/", async (req, res) => {
  const db = await readDB();
  res.status(200).json(db.todos);
});

/* -------------------- GET SINGLE TODO -------------------- */
router.get("/:todoId", async (req, res) => {
  const todoId = Number(req.params.todoId);
  const db = await readDB();

  const todo = db.todos.find(t => t.id === todoId);
  if (!todo)
    return res.status(404).json({ message: "Todo not found" });

  res.status(200).json(todo);
});

/* -------------------- UPDATE TODO -------------------- */
router.put("/update/:todoId", async (req, res) => {
  const todoId = Number(req.params.todoId);
  const db = await readDB();

  const todo = db.todos.find(t => t.id === todoId);
  if (!todo)
    return res.status(404).json({ message: "Todo not found" });

  Object.assign(todo, req.body);
  await writeDB(db);

  res.status(200).json({ message: "Todo updated", todo });
});

/* -------------------- DELETE TODO -------------------- */
router.delete("/delete/:todoId", async (req, res) => {
  const todoId = Number(req.params.todoId);
  const db = await readDB();

  const index = db.todos.findIndex(t => t.id === todoId);
  if (index === -1)
    return res.status(404).json({ message: "Todo not found" });

  const deletedTodo = db.todos.splice(index, 1);
  await writeDB(db);

  res.status(200).json({ message: "Todo deleted", todo: deletedTodo[0] });
});

export default router;

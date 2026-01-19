import express from "express";
import fs from "fs";
import rateLimiter from "../middleware/rateLimiter.middleware.js";
import validateTodo from "../middleware/validateTodo.middleware.js";

const router = express.Router();
const DB_PATH = "./db.json";

function readDB() {
  return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
}

function writeDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// Create Todo
router.post("/add", validateTodo, (req, res) => {
  const db = readDB();
  const newTodo = {
    id: db.todos.length ? db.todos[db.todos.length - 1].id + 1 : 1,
    title: req.body.title,
  };
  db.todos.push(newTodo);
  writeDB(db);
  res.status(201).json(newTodo);
});

// Get All Todos (with rate limiting)
router.get("/", rateLimiter, (req, res) => {
  const db = readDB();
  res.json(db.todos);
});

// Get Single Todo
router.get("/:todoId", (req, res) => {
  const db = readDB();
  const todo = db.todos.find((t) => t.id === parseInt(req.params.todoId));
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  res.json(todo);
});

// Update Todo
router.put("/update/:todoId", (req, res) => {
  const db = readDB();
  const todo = db.todos.find((t) => t.id === parseInt(req.params.todoId));
  if (!todo) return res.status(404).json({ error: "Todo not found" });

  todo.title = req.body.title || todo.title;
  writeDB(db);
  res.json(todo);
});

// Delete Todo
router.delete("/delete/:todoId", (req, res) => {
  const db = readDB();
  const index = db.todos.findIndex((t) => t.id === parseInt(req.params.todoId));
  if (index === -1) return res.status(404).json({ error: "Todo not found" });

  const deleted = db.todos.splice(index, 1);
  writeDB(db);
  res.json({ message: "Todo deleted", todo: deleted[0] });
});

export default router;
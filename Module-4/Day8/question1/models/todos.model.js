import fs from "fs";
import path from "path";

const DB_PATH = path.join(process.cwd(), "db.json");

function readDB() {
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify({ todos: [] }, null, 2));
  }
  return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
}

function writeDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

export function getAllTodos() {
  return readDB().todos;
}

export function getTodoById(id) {
  return readDB().todos.find((t) => t.id === id);
}

export function addTodo(todo) {
  const db = readDB();
  db.todos.push(todo);
  writeDB(db);
  return todo;
}

export function updateTodo(id, updated) {
  const db = readDB();
  const index = db.todos.findIndex((t) => t.id === id);
  if (index === -1) return null;
  db.todos[index] = { ...db.todos[index], ...updated };
  writeDB(db);
  return db.todos[index];
}

export function deleteTodo(id) {
  const db = readDB();
  const index = db.todos.findIndex((t) => t.id === id);
  if (index === -1) return null;
  const deleted = db.todos.splice(index, 1)[0];
  writeDB(db);
  return deleted;
}
import express from "express";
import {
  fetchTodos,
  fetchTodoById,
  createTodo,
  editTodo,
  removeTodo
} from "../controllers/todos.controller.js";

const router = express.Router();
router.get("/", fetchTodos);
router.get("/:todoId", fetchTodoById);
router.post("/add", createTodo);
router.put("/update/:todoId", editTodo);
router.delete("/delete/:todoId", removeTodo);
export default router;
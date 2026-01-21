import {
  getAllTodos,
  getTodoById,
  addTodo,
  updateTodo,
  deleteTodo
} from "../models/todos.model.js";

export function fetchTodos(req, res) {
  try {
    const todos = getAllTodos();
    res.status(200).json(todos);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: "Failed to fetch todos" });
  }
}

export function fetchTodoById(req, res) {
  try {
    const id = parseInt(req.params.todoId);
    const todo = getTodoById(id);
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch todo" });
  }
}

export function createTodo(req, res) {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: "Title is required" });

    const todos = getAllTodos();
    const newTodo = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      title
    };

    addTodo(newTodo);
    res.status(201).json({ message: "Todo created", todo: newTodo });
  } catch (err) {
    res.status(500).json({ error: "Failed to create todo" });
  }
}

export function editTodo(req, res) {
  try {
    const id = parseInt(req.params.todoId);
    const updated = updateTodo(id, req.body);
    if (!updated) return res.status(404).json({ error: "Todo not found" });
    res.status(200).json({ message: "Todo updated", todo: updated });
  } catch (err) {
    res.status(500).json({ error: "Failed to update todo" });
  }
}

export function removeTodo(req, res) {
  try {
    const id = parseInt(req.params.todoId);
    const deleted = deleteTodo(id);
    if (!deleted) return res.status(404).json({ error: "Todo not found" });
    res.status(200).json({ message: "Todo deleted", todo: deleted });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
}
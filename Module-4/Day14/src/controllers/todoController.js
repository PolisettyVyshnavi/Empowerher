import { createTodoService, getUserTodosService, updateTodoService, deleteTodoService } from '../services/todoService.js';

export async function addTodo(req, res) {
  try {
    const todo = await createTodoService(req.body);
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getUserTodos(req, res) {
  try {
    const todos = await getUserTodosService(req.params.userId);
    res.json(todos);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

export async function updateTodo(req, res) {
  try {
    const todo = await updateTodoService(req.params.todoId, req.body);
    res.json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function deleteTodo(req, res) {
  try {
    const result = await deleteTodoService(req.params.todoId);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
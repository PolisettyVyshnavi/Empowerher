import express from 'express';
import { addTodo, getUserTodos, updateTodo, deleteTodo } from '../controllers/todoController.js';
import validateTodo from '../middleware/validateTodo.js';

const router = express.Router();
router.post('/add-todo', validateTodo, addTodo);
router.get('/get-my-todo/:userId', getUserTodos);
router.put('/update-todo/:todoId', updateTodo);
router.delete('/delete-todo/:todoId', deleteTodo);
export default router;
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import todoService from "../../services/todo.service";
import TodoItem from "./TodoItem";
const TodoList = () => {
const { user } = useAuth();
const [todos, setTodos] = useState([]);
const loadTodos = async () => {
const snapshot = await todoService.getTodos(user.uid);
setTodos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
};
useEffect(() => {
loadTodos();
}, []);
return (
<main className="flex-1 p-6">
{todos.map(todo => (
<TodoItem key={todo.id} todo={todo} refresh={loadTodos} />
))}
</main>
);
};
export default TodoList;
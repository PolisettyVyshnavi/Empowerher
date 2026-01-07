import { Button } from "@/components/ui/button";
import todoService from "../../services/todo.service";
import { useAuth } from "../../context/AuthContext";
const TodoItem = ({ todo, refresh }) => {
const { user } = useAuth();
const toggleStatus = async () => {
await todoService.updateTodo(user.uid, todo.id, { completed: !todo.completed });
refresh();
};
const deleteTodo = async () => {
await todoService.deleteTodo(user.uid, todo.id);
refresh();
};
return (
<div className="border p-4 mb-2 flex justify-between">
<span className={todo.completed ? "line-through" : ""}>{todo.title}</span>
<div className="space-x-2">
<Button size="sm" onClick={toggleStatus}>Toggle</Button>
<Button size="sm" variant="destructive" onClick={deleteTodo}>Delete</Button>
</div>
</div>
);
};
export default TodoItem;
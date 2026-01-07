import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import todoService from "../../services/todo.service";


const Sidebar = () => {
const { user } = useAuth();
const [todos, setTodos] = useState([]);


useEffect(() => {
const fetchTodos = async () => {
const snapshot = await todoService.getTodos(user.uid);
setTodos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
};
fetchTodos();
}, [user]);


return (
<aside className="w-64 border-r p-4">
<h2 className="font-semibold mb-2">Todos</h2>
{todos.map(todo => (
<div key={todo.id} className="p-2 rounded hover:bg-gray-100">
{todo.title}
</div>
))}
</aside>
);
};


export default Sidebar;
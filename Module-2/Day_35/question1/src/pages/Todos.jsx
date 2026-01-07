import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";
import TodoList from "../components/todos/TodoList";


const Todos = () => {
return (
<div className="min-h-screen flex flex-col">
<Navbar />
<div className="flex flex-1">
<Sidebar />
<TodoList />
</div>
<Footer />
</div>
);
};


export default Todos;
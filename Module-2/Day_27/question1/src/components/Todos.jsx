import React, { useEffect, useState } from "react";
import "./Todos.css";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 10))); // first 10 todos
  }, []);

  return (
    <div>
      <h2>Todos</h2>
      <div className="todos-grid">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-card">
            <h4>{todo.title}</h4>
            <p>Status: {todo.completed ? "Completed ✅" : "Not Completed ❌"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todos;
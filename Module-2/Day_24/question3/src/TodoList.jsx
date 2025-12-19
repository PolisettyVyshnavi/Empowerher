import React, { useEffect, useState } from "react";
import TodoCard from "./TodoCard";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setTodos(data.slice(0, 15)); // first 15 todos
        }
      });

    return () => {
      alert("cleanup worked");
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          userId={todo.userId}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default TodoList;
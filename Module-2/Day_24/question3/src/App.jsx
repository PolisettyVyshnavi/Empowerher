import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoCard from "./TodoCard";

function App() {
  const [showTodos, setShowTodos] = useState(true);

  const handleUnmount = () => {
    setShowTodos(false);
  };

  return (
    <div>
      <h1>Iteration + Fetch + Cleanup Demo</h1>
      <button onClick={handleUnmount}>Unmount Todos</button>
      {showTodos && <TodoList />}
    </div>
  );
}

export default App;
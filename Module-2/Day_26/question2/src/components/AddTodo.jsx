import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
function AddTodo() {
  const { addTodo } = useContext(TodoContext);
  const [input, setInput] = useState("");
  const handleAdd = () => {
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };
 return (
    <div>
      <input
        type="text"
        placeholder="Enter todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
export default AddTodo;
import React, { useState } from "react";

function Counter() {
  // Step 1: Initialize state
  const [count, setCount] = useState(0);

  // Step 2: Function to increment count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Step 3: Render UI
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;
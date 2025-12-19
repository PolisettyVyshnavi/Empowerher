import React from "react";

function TodoCard({ userId, title, completed }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h4>{title}</h4>
      <p>User ID: {userId}</p>
      <p>Status: {completed ? "Completed ✅" : "Pending ⏳"}</p>
    </div>
  );
}

export default TodoCard;
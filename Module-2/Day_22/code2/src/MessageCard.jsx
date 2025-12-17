import React from "react";

// Reusable component that accepts props
function MessageCard({ title, message }) {
  return (
    <div style={styles.card}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

// Simple inline styles for clarity
const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "12px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
};

export default MessageCard;
import React from "react";
import MessageCard from "./components/MessageCard";

function App() {
  return (
    <div>
      <h1>Message Cards Demo</h1>

      {/* Render multiple MessageCards with different props */}
      <MessageCard title="Welcome" message="This is the first message card." />
      <MessageCard title="Reminder" message="Don't forget to complete your assignment." />
      <MessageCard title="Update" message="React project setup is now complete." />
      <MessageCard title="Congrats" message="You have successfully created reusable components!" />
    </div>
  );
}

export default App;
import React from "react";
import FeedbackForm from "./components/FeedbackForm.jsx";
import ImageSlideshow from "./components/ImageSlideshow.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  return (
    <div className="space-y-10 p-6">
      <FeedbackForm />
      <ImageSlideshow />
      <TodoList />
    </div>
  );
}

export default App;
import express from "express";
import todosRouter from "./routes/todos.routes.js";

const app = express();
app.use(express.json());
app.use("/todos", todosRouter);
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
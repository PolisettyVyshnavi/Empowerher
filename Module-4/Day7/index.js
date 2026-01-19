import express from "express";
import todoRoutes from "./routes/todos.routes.js";
import loggerMiddleware from "./middleware/logger.middleware.js";

const app = express();
app.use(express.json());

// App-level middleware
app.use(loggerMiddleware);

// Mount Todo Router
app.use("/todos", todoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
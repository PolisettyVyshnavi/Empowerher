import express from "express";
import usersRouter from "./routes/users.routes.js";

const app = express();
app.get("/", (req, res) => {
  res.send("Welcome to the User Signup API!");
});
// Parse JSON for non-multipart routes
app.use(express.json());

// Mount router
app.use("/users", usersRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
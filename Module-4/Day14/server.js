import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './src/routes/userRoutes.js';
import todoRoutes from './src/routes/todoRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
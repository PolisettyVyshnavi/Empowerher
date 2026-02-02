import express from 'express';
import authRoutes from './routes/auth.routes.js';
import todoRoutes from './routes/todo.routes.js';

const app = express();
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', todoRoutes);

export default app;
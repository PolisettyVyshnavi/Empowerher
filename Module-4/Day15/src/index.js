import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import profileRoutes from './routes/profileRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', profileRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Auth API running on port ${PORT}`));
import express from 'express';
import { signup, deleteUser } from '../controllers/userController.js';
import validateUser from '../middleware/validateUser.js';

const router = express.Router();
router.post('/signup', validateUser, signup);
router.delete('/:id', deleteUser);
export default router;
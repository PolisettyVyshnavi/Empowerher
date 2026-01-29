import { Router } from 'express';
const router = Router();
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from '../controllers/userController.js';
import validateUser from '../middleware/validateUser.js';

router.post('/', validateUser, createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', validateUser, updateUser);
router.delete('/:id', deleteUser);
export default router;
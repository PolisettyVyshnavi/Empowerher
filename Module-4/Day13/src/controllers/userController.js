import {
  createUserService,
  getUsersService,
  getUserByIdService,
  updateUserService,
  deleteUserService
} from '../services/userService.js';

export async function createUser(req, res) {
  try {
    const user = await createUserService(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getUsers(req, res) {
  try {
    const users = await getUsersService();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getUserById(req, res) {
  try {
    const user = await getUserByIdService(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
}

export async function updateUser(req, res) {
  try {
    const user = await updateUserService(req.params.id, req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function deleteUser(req, res) {
  try {
    const result = await deleteUserService(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
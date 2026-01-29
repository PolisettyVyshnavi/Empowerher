import supabase from '../config/supabase.js';
import bcrypt from 'bcrypt';

export async function createUserService(userData) {
  const { name, email, password, age, role } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);
  const { data, error } = await supabase
    .from('users')
    .insert([{ name, email, password: hashedPassword, age, role }])
    .select();
  if (error) throw error;
  return data[0];
}
export async function getUsersService() {
  const { data, error } = await supabase.from('users').select('*');
  if (error) throw error;
  return data;
}
export async function getUserByIdService(id) {
  const { data, error } = await supabase.from('users').select('*').eq('id', id).single();
  if (error) throw error;
  return data;
}
export async function updateUserService(id, updates) {
  if (updates.password) {
    updates.password = await bcrypt.hash(updates.password, 10);
  }
  const { data, error } = await supabase.from('users').update(updates).eq('id', id).select();
  if (error) throw error;
  return data[0];
}
export async function deleteUserService(id) {
  const { error } = await supabase.from('users').delete().eq('id', id);
  if (error) throw error;
  return { message: "User deleted successfully" };
}
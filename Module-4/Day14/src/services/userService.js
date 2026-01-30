import supabase from '../config/supabase.js';
import bcrypt from 'bcrypt';

export async function createUserService({ name, email, password }) {
  if (!name || !email || !password) throw new Error("Missing required fields");

  const hashedPassword = await bcrypt.hash(password, 10);

  const { data, error } = await supabase
    .from('users')
    .insert([{ name, email, password: hashedPassword }])
    .select();

  if (error) throw error;
  return data[0];
}

export async function deleteUserService(id) {
  const { error } = await supabase.from('users').delete().eq('id', id);
  if (error) throw error;
  return { message: "User and related todos deleted successfully" };
}
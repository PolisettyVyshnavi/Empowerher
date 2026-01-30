import supabase from '../config/supabase.js';

export async function createTodoService({ title, description, userId }) {
  if (!title || !userId) throw new Error("Title and userId are required");
  const { data, error } = await supabase
    .from('todos')
    .insert([{ title, description, user_id: userId }])
    .select();
  if (error) throw error;
  return data[0];
}
export async function getUserTodosService(userId) {
  const { data, error } = await supabase.from('todos').select('*').eq('user_id', userId);
  if (error) throw error;
  return data;
}
export async function updateTodoService(todoId, updates) {
  const { data, error } = await supabase.from('todos').update(updates).eq('id', todoId).select();
  if (error) throw error;
  if (!data.length) throw new Error("Todo not found");
  return data[0];
}
export async function deleteTodoService(todoId) {
  const { error } = await supabase.from('todos').delete().eq('id', todoId);
  if (error) throw error;
  return { message: "Todo deleted successfully" };
}
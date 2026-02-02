import supabase from '../config/supabase.js';

export async function createTodo(req, res) {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: "Title required" });

    const { data, error } = await supabase
      .from('todos')
      .insert([{ title, user_id: req.user.userId }])   // use user_id
      .select();

    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
export async function getTodos(req, res) {
  try {
    const { data, error } = await supabase
      .from('todos')
      .select('*')
      .eq('user_id', req.user.userId);  

    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
export async function updateTodo(req, res) {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;
    const { data: todo } = await supabase
      .from('todos')
      .select('*')
      .eq('id', id)
      .single();

    if (!todo || todo.user_id !== req.user.userId) {
      return res.status(403).json({ error: "Not authorized" });
    }

    const { data, error } = await supabase
      .from('todos')
      .update({ title, completed })
      .eq('id', id)
      .select();

    if (error) throw error;
    res.json(data[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function deleteTodo(req, res) {
  try {
    const { id } = req.params;

    const { data: todo } = await supabase
      .from('todos')
      .select('*')
      .eq('id', id)
      .single();

    if (!todo || todo.user_id !== req.user.userId) {
      return res.status(403).json({ error: "Not authorized" });
    }

    const { error } = await supabase
      .from('todos')
      .delete()
      .eq('id', id);

    if (error) throw error;
    res.json({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
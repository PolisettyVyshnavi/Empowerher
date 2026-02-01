import supabase from '../config/supabase.js';

export async function getProfile(req, res) {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({ error: "Name query parameter is required" });
    }

    const { data: user, error } = await supabase
      .from('users')
      .select('id, name, email, age, location')
      .eq('name', name)
      .single();

    if (error) throw error;
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
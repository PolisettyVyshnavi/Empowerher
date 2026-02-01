import supabase from '../config/supabase.js';
import bcrypt from 'bcrypt';

export async function signup(req, res) {
  try {
    const { name, email, age, location, password } = req.body;

    // Validate input
    if (!name || !email || !age || !location || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check duplicate email
    const { data: existingUser } = await supabase
      .from('users')
      .select('id')
      .eq('email', email)
      .single();

    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    const { error } = await supabase
      .from('users')
      .insert([{ name, email, age, location, password: hashedPassword }]);

    if (error) throw error;

    res.json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
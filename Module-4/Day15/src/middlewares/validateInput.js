export function validateSignup(req, res, next) {
  const { name, email, age, location, password } = req.body;
  if (!name || !email || !age || !location || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }
  if (typeof age !== "number" || age <= 0) {
    return res.status(400).json({ error: "Age must be a positive number" });
  }
  next(); 
}
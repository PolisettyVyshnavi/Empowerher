import express from "express";
import fs from "fs/promises";

const app = express();
const PORT = 3000;
const DB_FILE = "./db.json";

app.use(express.json());

// Helper: Read DB
const readDB = async () => {
  const data = await fs.readFile(DB_FILE, "utf-8");
  return JSON.parse(data);
};

// Helper: Write DB
const writeDB = async (data) => {
  await fs.writeFile(DB_FILE, JSON.stringify(data, null, 2));
};

/* =====================
   GET /students
   ===================== */
app.get("/students", async (req, res) => {
  const db = await readDB();
  res.status(200).json(db.students);
});

/* =====================
   POST /students
   ===================== */
app.post("/students", async (req, res) => {
  const { name, course, year } = req.body;

  if (!name || !course || !year) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const db = await readDB();
  const newStudent = {
    id: db.students.length ? db.students.at(-1).id + 1 : 1,
    name,
    course,
    year
  };

  db.students.push(newStudent);
  await writeDB(db);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent
  });
});

/* =====================
   PUT /students
   ===================== */
app.put("/students", async (req, res) => {
  const { id, name, course, year } = req.body;

  const db = await readDB();
  const student = db.students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  if (name) student.name = name;
  if (course) student.course = course;
  if (year) student.year = year;

  await writeDB(db);

  res.status(200).json({
    message: "Student updated successfully",
    student
  });
});

/* =====================
   DELETE /students/:id
   ===================== */
app.delete("/students/:id", async (req, res) => {
  const id = Number(req.params.id);
  const db = await readDB();

  const index = db.students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  const deletedStudent = db.students.splice(index, 1);
  await writeDB(db);

  res.status(200).json({
    message: "Student deleted successfully",
    student: deletedStudent[0]
  });
});

/* =====================
   Start Server
   ===================== */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

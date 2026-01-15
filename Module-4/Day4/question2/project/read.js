// read.js
import fs from 'fs/promises';

export async function readFileContent() {
  try {
    const data = await fs.readFile('Data.txt', 'utf-8');
    return data;
  } catch (err) {
    throw new Error("Error reading file: " + err.message);
  }
}
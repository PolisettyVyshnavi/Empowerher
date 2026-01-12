// index.js
import os from 'os';
import fs from 'fs/promises'; // ES Modules + async methods

// --------------------
// Part A – OS Module
// --------------------
console.log("=== OS Module Info ===");
console.log("Free memory:", os.freemem(), "bytes");
console.log("Total CPU cores:", os.cpus().length);

// --------------------
// Part B – File System CRUD
// --------------------
async function fileOperations() {
  try {
    // 1. Create data.txt with "Hello World"
    await fs.writeFile('data.txt', 'Hello World');
    console.log("✅ data.txt created");

    // 2. Create Readme.md with content
    await fs.writeFile('Readme.md', '## This is first line in Readme');
    console.log("✅ Readme.md created");

    // 3. Read data.txt and print content
    const data = await fs.readFile('data.txt', 'utf-8');
    console.log("📖 Content of data.txt:", data);

    // 4. Append text to data.txt
    await fs.appendFile('data.txt', '\nThis is second line');
    console.log("✅ Appended to data.txt");

    // 5. Delete Readme.md
    await fs.unlink('Readme.md');
    console.log("🗑️ Readme.md deleted");
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

// Run the operations
fileOperations();
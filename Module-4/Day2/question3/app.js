import os from 'os';
import fs from 'fs/promises'; 

console.log("=== OS Module Info ===");
console.log("Free memory:", os.freemem(), "bytes");
console.log("Total CPU cores:", os.cpus().length);

async function fileOperations() {
  try {
    await fs.writeFile('data.txt', 'Hello World');
    console.log("✅ data.txt created");

    await fs.writeFile('Readme.md', '## This is first line in Readme');
    console.log("✅ Readme.md created");

    const data = await fs.readFile('data.txt', 'utf-8');
    console.log("📖 Content of data.txt:", data);

    await fs.appendFile('data.txt', '\nThis is second line');
    console.log("✅ Appended to data.txt");

    await fs.unlink('Readme.md');
    console.log("🗑️ Readme.md deleted");
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}
fileOperations();
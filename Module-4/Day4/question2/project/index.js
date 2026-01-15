import express from 'express';
import os from 'os';
import dns from 'dns';
import { readFileContent } from './read.js';

const app = express();
const PORT = 3000;
app.get('/test', (req, res) => {
  res.send("Test route is working!");
});
app.get('/readfile', async (req, res) => {
  try {
    const content = await readFileContent();
    res.send(content);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.get('/systemdetails', (req, res) => {
  const totalMemGB = (os.totalmem() / (1024 ** 3)).toFixed(2) + " GB";
  const freeMemGB = (os.freemem() / (1024 ** 3)).toFixed(2) + " GB";
  const cpuModel = os.cpus()[0].model;
  const cpuCores = os.cpus().length;
  res.json({
    platform: os.platform(),
    totalMemory: totalMemGB,
    freeMemory: freeMemGB,
    cpuModel: cpuModel,
    cpuCores: cpuCores
  });
});
app.get('/getip', (req, res) => {
  dns.lookup('masaischool.com', { all: true }, (err, addresses) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      hostname: 'masaischool.com',
      ipAddresses: addresses.map(addr => addr.address)
    });
  });
});
app.get('/', (req, res) => {
  res.send("Welcome to the Express server!");
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
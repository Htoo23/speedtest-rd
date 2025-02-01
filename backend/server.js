const express = require('express');
const speedTest = require('speed-test');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/speedtest', (req, res) => {
  speedTest({ maxTime: 5000 }, (err, speed) => {
    if (err) {
      console.error("Speed test error:", err);
      return res.status(500).json({ error: 'Failed to run speed test' });
    }
    res.json(speed);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
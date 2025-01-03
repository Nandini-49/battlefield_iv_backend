const express = require('express');
const cors = require('cors');
const data = require('./dataSource.json');
const app = express();

const PORT = process.env.PORT || 3000;

// Extracting specific data from the JSON file
const maps = data.maps;
const headings = data.headings;
const stats = data.statistics;

// Middleware
app.use(cors());

// API endpoints
app.get('/api/maps', (req, res) => {
  res.status(200).json(maps);
});

app.get('/api/headings', (req, res) => {
  res.status(200).json(headings);
});

app.get('/api/stats', (req, res) => {
  res.status(200).json(stats);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

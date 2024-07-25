const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  res.send('Hello, world!');
});

router.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).json({ error: err });
      return;
    }
    res.json(results);
  });
});

module.exports = router;

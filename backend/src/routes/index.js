// src/routes/index.js
const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

// POST endpoint to create a new form entry
router.post('/submit-form', async (req, res) => {
  try {
    const formData = new Form(req.body);
    await formData.save();
    res.status(201).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

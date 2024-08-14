const express = require('express');
const router = express.Router();
const Form = require('../models/Form'); // Adjust path if needed

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

// GET endpoint to fetch all forms
router.get('/forms', async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT endpoint to update a form by ID
router.put('/forms/:id', async (req, res) => {
  try {
    const form = await Form.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!form) {
      return res.status(404).send({ message: 'Form not found' });
    }
    res.json(form);
  } catch (error) {
    res.status(500).send({ message: 'Error updating form', error });
  }
});

// DELETE endpoint to delete a form by ID
router.delete('/forms/:id', async (req, res) => {
  try {
    const form = await Form.findByIdAndDelete(req.params.id);
    if (!form) {
      return res.status(404).send({ message: 'Form not found' });
    }
    res.json({ message: 'Form deleted successfully!' });
  } catch (error) {
    res.status(500).send({ message: 'Error deleting form', error });
  }
});

module.exports = router;

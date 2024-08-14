// src/models/Form.js
const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
  service: { type: String, required: true },
  requirementEditor: { type: String, required: true },
  companyName: { type: String, required: true },
  website: { type: String, required: true },
  allocatedTo: { type: String, required: true },
  priority: { type: String, enum: ['Low', 'Medium', 'High'], required: true },
  academicLevel: { type: String, required: true },
  tag: { type: String, required: true },
  followUpDate: { type: Date, required: true },
  queryCreatedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Form', FormSchema);

// src/index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cron = require('node-cron');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://codersaro:Sarorosy12@cluster0.av48khu.mongodb.net/formDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define routes
const routes = require('./routes');
app.use('/api', routes);

// Cron job to ping every 14 minutes
cron.schedule('*/14 * * * *', () => {
  console.log('Pinging the URL...');
  axios.get('https://form-6scp.onrender.com')
    .then(response => {
      console.log('Ping successful:', response.status);
    })
    .catch(error => {
      console.error('Error pinging the URL:', error);
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

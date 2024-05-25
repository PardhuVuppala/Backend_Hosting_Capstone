const mongoose = require('mongoose');

require("dotenv").config();
const url = process.env.MONGODB_URI;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('NODEJS TO MongoDB Connection ESTABLISHED.....');
  })
  .catch(err => {
    console.error('Error in DB connection:', err.message);
    process.exit(1); // Exit the process with an error code
  });

module.exports = mongoose;
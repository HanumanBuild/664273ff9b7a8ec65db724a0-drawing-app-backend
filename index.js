const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Replace <username>, <password>, and <dbname> with your MongoDB credentials and database name
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
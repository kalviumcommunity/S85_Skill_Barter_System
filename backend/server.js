const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./Routess/routes'); // ✅ Make sure path is correct
const app = express();

app.use(cors());
app.use(express.json());

// ✅ This must receive a router
app.use('/api', routes);

mongoose.connect('mongodb://localhost:27017/skillbarter', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected");
  app.listen(5000, () => console.log("Server running on http://localhost:5000"));
}).catch(err => console.error("MongoDB connection error:", err));

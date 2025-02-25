require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require('./Routess/routes'); // Import routes.js

require("dotenv").config(); // Load environment variables

const app = express();


// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Database Connection
mongoose.connect(process.env.URL)
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

// Use Routes
app.use("/api", routes); // Base API route prefix

// Default Route
app.get("/", (req, res) => {
    res.send("Welcome to the Skill Barter System API!");
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

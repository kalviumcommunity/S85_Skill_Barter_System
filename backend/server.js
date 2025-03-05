
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require('./Routess/routes'); 


const app = express();

app.use(cors());
app.use(express.json()); 


mongoose.connect(process.env.URL)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));


app.use("/api", routes);


app.get("/", (req, res) => {
    res.send("Welcome to the Skill Barter System API!");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

    console.log(`🚀 Server running on port ${PORT}`);

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic /ping route
app.get('/', (req, res) => {
    res.send('Hello,I am Rishi, this is my project of Skill Barter System');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

});






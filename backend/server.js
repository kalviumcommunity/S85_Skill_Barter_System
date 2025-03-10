require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./Routess/routes"); // Ensure this path is correct

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

// API Routes
app.use("/api", routes);

// Root Route
app.get("/", (req, res) => {
    res.send("Hello, I am Rishi. This is my Skill Barter System project API.");
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});

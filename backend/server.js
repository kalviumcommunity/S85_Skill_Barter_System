const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./Routess/routes'); 
const { User } = require('./model/schema');
 

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/skillbarter", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("✅ MongoDB connected successfully!"))
    .catch((err) => {
        console.error("❌ MongoDB connection error:", err);
        process.exit(1); // Stop the server if DB connection fails
    });

app.use("/api", routes);

app.get('/api/users', async (req, res) => {
    try {
        console.log("📡 Received GET request to /api/users");
        const users = await User.find();
        console.log("✅ Users found:", users);
        res.json(users);
    } catch (error) {
        console.error("❌ Error fetching users:", error);
        res.status(500).json({ message: "Error fetching users", error: error.message });
    }
});

app.listen(5000, () => {
    console.log('🚀 Server running on http://localhost:5000');
});

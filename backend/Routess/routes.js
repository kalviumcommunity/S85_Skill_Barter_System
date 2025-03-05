const express = require("express");
const router = express.Router();
const {User} = require("../model/schema"); 

router.use(express.json());


router.get("/users", async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    } catch(err){
        res.status(500).json({ message: err.message });
    }
});


router.post("/users", async (req, res) => {
    try{
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ message: "User created successfully", newUser});
    } catch(err){
        res.status(500).json({ message: err.message });
    }
});


router.put("/users/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: "User updated successfully", updatedUser });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete("/users/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});




module.exports = router;
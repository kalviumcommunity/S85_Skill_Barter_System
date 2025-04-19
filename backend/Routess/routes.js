const express = require('express');
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { User } = require('../model/schema');

// @route   POST /api/users
// @desc    Create a new user/entity
router.post('/users', [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('skillsOffered').isArray({ min: 1 }).withMessage('At least one skill offered is required'),
  body('skillsNeeded').isArray({ min: 1 }).withMessage('At least one skill needed is required'),
  body('bio').notEmpty().withMessage('Bio is required'),
  body('created_by').notEmpty().withMessage('created_by is required')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// @route   GET /api/users
// @desc    Get all users or filter by created_by
router.get("/users", async (req, res) => {
  const { created_by } = req.query;
  const filter = created_by ? { created_by } : {};

  try {
    const users = await User.find(filter).populate("created_by");
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// @route   GET /api/users/:id
// @desc    Get a single user by ID
router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

// @route   PUT /api/users/:id
// @desc    Update a user by ID
router.put("/users/:id", [
  body('name').optional().notEmpty(),
  body('email').optional().isEmail(),
  body('skillsOffered').optional().isArray(),
  body('skillsNeeded').optional().isArray(),
  body('bio').optional().notEmpty()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to update user" });
  }
});

// @route   DELETE /api/users/:id
// @desc    Delete a user by ID
router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete user" });
  }
});

module.exports = router;

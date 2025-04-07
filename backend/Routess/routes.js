const express = require('express');
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require('../model/schema');

// POST /api/users
router.post('/users', [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('skillsOffered').isArray({ min: 1 }),
  body('skillsNeeded').isArray({ min: 1 }),
  body('bio').notEmpty()
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

module.exports = router;

const mongoose = require("mongoose");

// User Schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String, // Hashed password
  skillsOffered: [String],
  skillsNeeded: [String],
  bio: String,
});

// Category Schema
const CategorySchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true }, // e.g., "Programming", "Cooking", "Design"
  description: String,
});

// Exchange Schema (Skill Swap Requests)
const ExchangeSchema = new mongoose.Schema({
  requester: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  provider: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  skillOffered: String,
  skillNeeded: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }, // Link to Category
  status: { type: String, enum: ["pending", "accepted", "completed"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

// Transaction Schema (Records Completed Exchanges)
const TransactionSchema = new mongoose.Schema({
  exchange: { type: mongoose.Schema.Types.ObjectId, ref: "Exchange" },
  requester: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  provider: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  skillExchanged: String,
  completedAt: { type: Date, default: Date.now },
  review: String, // Optional feedback
});

// Chat Message Schema
const ChatMessageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  message: String,
  timestamp: { type: Date, default: Date.now },
});

const User = mongoose.model("User", UserSchema);
const Category = mongoose.model("Category", CategorySchema);
const Exchange = mongoose.model("Exchange", ExchangeSchema);
const Transaction = mongoose.model("Transaction", TransactionSchema);
const ChatMessage = mongoose.model("ChatMessage", ChatMessageSchema);

module.exports = { User, Category, Exchange, Transaction, ChatMessage };

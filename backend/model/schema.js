const mongoose = require("mongoose");

// ✅ User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  skillsOffered: [String],
  skillsNeeded: [String],
  bio: String,
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // self-reference
    required: true
  }
});

const User = mongoose.model("User", userSchema);

// ✅ Category Schema
const categorySchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true }, // e.g., "Programming", "Cooking", "Design"
  description: String,
});

const Category = mongoose.model("Category", categorySchema);

// ✅ Exchange Schema
const exchangeSchema = new mongoose.Schema({
  requester: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  provider: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  skillOffered: String,
  skillNeeded: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }, // Link to Category
  status: { type: String, enum: ["pending", "accepted", "completed"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

const Exchange = mongoose.model("Exchange", exchangeSchema);

// ✅ Transaction Schema
const transactionSchema = new mongoose.Schema({
  exchange: { type: mongoose.Schema.Types.ObjectId, ref: "Exchange" },
  requester: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  provider: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  skillExchanged: String,
  completedAt: { type: Date, default: Date.now },
  review: String, // Optional feedback
});

const Transaction = mongoose.model("Transaction", transactionSchema);

// ✅ Chat Message Schema
const chatMessageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  message: String,
  timestamp: { type: Date, default: Date.now },
});

const ChatMessage = mongoose.model("ChatMessage", chatMessageSchema);

// ✅ Export all models
module.exports = {
  User,
  Category,
  Exchange,
  Transaction,
  ChatMessage,
};

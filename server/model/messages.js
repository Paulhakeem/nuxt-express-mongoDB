const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  userId: { type: String },
  text: {
    type: String,
    required: true,
  },
  timestamp: { type: Date, default: Date.now },
  userName: String,
});

const Messages = mongoose.model("Messages", messageSchema);

module.exports = Messages;

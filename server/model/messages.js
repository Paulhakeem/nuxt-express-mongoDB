const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  text: {
    type: String,
    required: true,
  },
  timestamp: { type: Date, default: Date.now },
  senderName: {type: String}
});

const Messages = mongoose.model("Messages", messageSchema);

module.exports = Messages;

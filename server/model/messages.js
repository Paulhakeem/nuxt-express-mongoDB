const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true
  },
  recipientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true
  },
  text: {
    type: String,
    require: true,
  },
  date: { type: Date, default: Date.now },
});

const Messages = mongoose.model("Messages", messageSchema);

module.exports = Messages;

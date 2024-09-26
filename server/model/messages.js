const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  text: {
    type: String,
    require: true,
  },
  date: { type: Date, default: Date.now },
});

const Messages = mongoose.model("messages", messageSchema);

module.exports = Messages;

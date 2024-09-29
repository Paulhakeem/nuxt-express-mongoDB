const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  chatroom: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "Chatroom",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "User",
  },
  text: {
    type: String,
    require: true,
  },
  date: { type: Date, default: Date.now },
});

const Messages = mongoose.model("Messages", messageSchema);

module.exports = Messages;

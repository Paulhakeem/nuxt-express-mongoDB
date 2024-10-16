const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
  timestamp: { type: Date, default: Date.now },
});

const Messages = mongoose.model("Messages", messageSchema);

module.exports = Messages;

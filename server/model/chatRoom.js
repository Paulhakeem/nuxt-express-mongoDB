const mongoose = require("mongoose");

const chatroomSchema = new mongoose.Schema({
  name: {
    type: String,
    require: "Name is required",
  },
});

const Chatroom = mongoose.model("Chatroom", chatroomSchema);

module.exports = Chatroom;

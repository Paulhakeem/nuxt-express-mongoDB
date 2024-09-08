const mongoose = require("mongoose");


const messageSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  date: {type: Date, default: Date.now}
});

const Messages = mongoose.model("messages", messageSchema)


module.exports = Messages

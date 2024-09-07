const mongoose = require("mongoose");
const { schema } = require("./user");

const messageSchema = new schema({
  text: {
    type: String,
  },
  date: {type: Date, default: Date.now}
});

const messages = mongoose.model("messages", messageSchema)


module.exports = messages

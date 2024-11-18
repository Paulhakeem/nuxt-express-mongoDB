const mongoose = require('mongoose')


const privateChatSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    message: {
        type: String
    },
    date: { type: Date, default: Date.now },
})

const chat = mongoose.model("Private-Chat", privateChatSchema)

module.exports = chat
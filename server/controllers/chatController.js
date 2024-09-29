const Chatroom = require("../model/chatRoom")

exports.creatChatroom = async(res,res,next)=> {
    const {name}  = req.body
    const nameRegex = /^[A-Za-z\s]+$/

    if(!nameRegex.test(name)) throw 'Chatroom can only contain alphabets.'

    const room = await Chatroom.create(name)

    res.status(201).json({
        status: 'success',
        room
    })
}

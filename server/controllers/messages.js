const Messages = require('../model/messages')


exports.sendMessage = async(req,res)=> {
    const {text} = req.body
    if(!text){
        return res.status(400).json({
            status: "fail",
            message: 'Please enter the message'
        })
    }

    const newMessage = await Messages.create(req.body)

    if(newMessage){
        return res.status(201).json({
            status: "success",
            newMessage
        })
    }
}

exports.getMessages = async(req,res)=> {
    const messages = await Messages.find()
    if(messages){
        return res.status(200).json({
            status: "success",
            messages
        })
    }
}


exports.deleteMessage = async(req,res)=> {
    
}
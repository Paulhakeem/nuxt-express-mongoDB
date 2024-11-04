const Messages = require("../model/messages");
const User = require("../model/user")
exports.sendMessage = async (req, res) => {
  const { text, user } = req.body;
  if (!text) {
    return res.status(400).json({
      status: "fail",
      message: "Please enter the message",
    });
  }

  const newMessage = await Messages.create({user: User._id, text:text});

  if (newMessage) {
    return res.status(201).json({
      status: "success",
      newMessage,
    });
  }
};

exports.getMessages = async (req, res, next) => {
  try {
    const data = await Messages.aggregate().lookup({
      from: "user._id",
      localField: "user",
      foreignField: "_id",
      as: "joinedData",
    });
    console.log(data);
    if (data) {
      res.status(200).json({ status: "sucess", data });
     
      
    }
  } catch (error) {
    res.status(500).json({ status: "failed", error });
  }
 
};

exports.deleteMessage = async (req, res) => {
  const id = req.params.id;

  const deleteText = await Messages.findByIdAndDelete(id);

  if (deleteText) {
    return res.status(200).json({
      status: "success",
      message: "message deleted",
    });
  }
};

exports.joinCollection = async (req, res) => {
  const respond = await Messages.find().populate("text").exec();
  if (respond) {
    res.status(200).json({
      status: "success",
      respond,
    });
  }
};

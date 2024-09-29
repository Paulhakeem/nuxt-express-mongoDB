const Messages = require("../model/messages");

exports.sendMessage = async (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({
      status: "fail",
      message: "Please enter the message",
    });
  }

  const newMessage = await Messages.create(req.body);

  if (newMessage) {
    return res.status(201).json({
      status: "success",
      newMessage,
    });
  }
};

exports.getMessages = async (req, res, next) => {
  try {
    const messages = await Messages.find()
      .populate("user")
    if (messages) {
      res.status(200).json({ status: "sucess", messages });
    }
  } catch (error) {
    res.status(500).json({ status: "failed", error });
  }
  next()
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

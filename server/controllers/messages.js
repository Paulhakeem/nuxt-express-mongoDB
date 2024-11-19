const Messages = require("../model/messages");

// SEND MESSAGE
exports.sendMessage = async (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({
      status: "fail",
      message: "Please enter the message",
    });
  }

  const newMessage = await Messages.create({
    userId: req.user._id,
    text: req?.body?.text,
  });

  if (newMessage) {
    return res.status(201).json({
      status: "success",
      newMessage,
    });
  }
};

// GETING MESSAGES
exports.getMessages = async (req, res, next) => {
  await Messages.find()
    .then((result) => {
      res.status(200).json({ status: "sucess", result });
    })
    .catch((err) => {
      res.status(500).json({ status: "failed", err });
    });
};

// DELETING MESSAGE

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

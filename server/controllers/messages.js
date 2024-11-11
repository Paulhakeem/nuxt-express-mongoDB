const Messages = require("../model/messages");
const User = require("../model/user");

// SEND MESSAGE
exports.sendMessage = async (req, res) => {
  const { text, user } = req.body;
  if (!text) {
    return res.status(400).json({
      status: "fail",
      message: "Please enter the message",
    });
  }

  const newMessage = await Messages.create({ user: User._id, text: text });

  if (newMessage) {
    return res.status(201).json({
      status: "success",
      newMessage,
    });
  }
};

// GETING MESSAGES
exports.getMessages = async (req, res, next) => {
  await Messages.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "userName",
        foreignField: "name",
        as: "userInfor",
      },
    },
    {
      $unwind: "$userInfor",
    },
  ])
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

exports.joinCollection = async (req, res) => {
  const respond = await Messages.find().populate("text").exec();
  if (respond) {
    res.status(200).json({
      status: "success",
      respond,
    });
  }
};

const Messages = require("../model/messages");
const Users = require("../model/user");
const jwt = require("jsonwebtoken");
const env = require("dotenv")

env.config({ path: "./config.env" });


exports.createMessage = async (req, res, next) => {
  const userToken = req.headers.authorization;

  if (userToken) {
    const token = userToken.split(" ")[1];
    try {
      const promisifyToken = jwt.verify(token, process.env.SECRET_STR);

      const userExist = await Users.findById(promisifyToken.id);

      if (userExist) {
       const text = new Messages({
        userId: userExist._id,
        text: req.body.text
       })
        await text.save()
        res.status(200).json({ status: "sucess", text });
      }
    } catch (error) {
      res
        .status(401)
        .json({ status: "failed", message: "Invalid token" });
    }
  }
  next();
};


// GETING MESSAGES
exports.getMessages = async (req, res, next) => {
  try {
    const user = await User.findById({ _id: "67338203b32523d9dda6663e" });
    const messages = await Messages.find({ userId: user._id });
    if (messages) {
      res.status(200).json({ status: "sucess", messages });
    }
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
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

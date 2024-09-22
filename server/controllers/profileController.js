const Users = require("../model/user");
const jwt = require("jsonwebtoken");
const env = require("dotenv");

env.config({ path: "./config.env" });

exports.userProfile = async (req, res, next) => {
  const userToken = req.headers.authorization;

  if (userToken) {
    const token = userToken.split(" ")[1];
    try {
      const promisifyToken = jwt.verify(token, process.env.SECRET_STR);

      const userExist = await Users.findById(promisifyToken.id);

      if (userExist) {
        res.status(200).json({ status: "sucess", userExist });
      }
    } catch (error) {
      res
        .status(500)
        .json({ status: "failed", message: "something went wrong!" });
    }
  }
  next()
};

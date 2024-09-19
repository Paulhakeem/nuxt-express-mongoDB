const Users = require("../model/user");
const util = require("util");
const jwt = require("jsonwebtoken");

exports.userProfile = async (req, res, next) => {
  const userToken = req.headers.authorization;
  if (!userToken) {
    return res.status(401).json({ message: "Authentication required" });
  }
  const promisifyToken = jwt.verify(userToken, "secret_key");

  if (promisifyToken) {
    const userExist = await Users.findById(promisifyToken.id);
    console.log("hello");
    
  }
};

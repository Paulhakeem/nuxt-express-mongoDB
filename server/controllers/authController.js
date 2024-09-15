const Users = require("../model/user");
const bcrypt = require("bcrypt");
const jwtToken = require("jsonwebtoken");
const util = require("util");

// jwtToken
const userToken = (id) => {
  return jwtToken.sign({ id }, process.env.SECRET_STR, {
    expiresIn: 24 * 60 * 60 * 1000,
  });
};

// cookie for token
const sendResponse = (user, statusCode, res) => {
  const token = userToken(user._id);
  const options = {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
  };
  if ((process.env.NODE_ENV = "production")) {
    options.secure = true;
  }
  user.password = undefined;

  res.cookie("jwt", token, options);
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

// sign
exports.createUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !password || !email) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  try {
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }
    const newUser = await Users.create(req.body);
    sendResponse(newUser, 201, res);
  } catch (error) {
    res.status(401).json({
      status: "fail",
      message: error.message,
    });
  }
  next();
};

// login
exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(401).json({
        sucess: "fail",
        data: {
          message: "Invalid username or email",
        },
      });
    }
    const user = await Users.findOne({ email }).select("+password");
    const isMatch = await bcrypt.compare(password, user.password);

    if (!user || !isMatch) {
      res.status(401).json({
        sucess: "fail",
        data: {
          message: "Check Your Credetials!",
        },
      });
    }
    sendResponse(user, 200, res);
  } catch (error) {}
  next();
};

exports.userProfile = async (req, res) => {
  try {
    const usertoken = req.headers["authorization"];

    const verified = jwtToken.verify(usertoken, "Hakeem Paul");
    if (verified) {
      return res.status(200).json({ status: "sucess", name: verified.name });
    }
  } catch (error) {
    return res.status(500).json({ status: "fail", message: error.message });
  }
};

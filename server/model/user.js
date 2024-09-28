const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
// const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name."],
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "Please enter your email address."],
    validate: [validator.isEmail],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    miniLength: [8, "Password shuld be of 8 characters"],
    select: false,
  },
  date: { type: Date, default: Date.now },
  imageURL: {type: String}
});

// encrypt
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// compare Password
userSchema.methods.comparePassword = async function (pwd, pwdDB) {
  return await bcrypt.compare(pwd, pwdDB);
};




const User = mongoose.model("User", userSchema);

module.exports = User;

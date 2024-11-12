const express = require("express");
const errorHundle = require("../middleware/errorHundle");
const Users = require("../model/user");

const filterObj = (Obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(Obj).forEach((prop) => {
    if (allowedFields.includes(prop)) newObj[prop] = Obj[prop];
  });
  return newObj;
};

// users
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await Users.find();
    res.status(200).json({
      status: "sucess",
      length: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "something went wrong!!",
    });
  }
  next();
};

// find user
exports.findUser = async (req, res, next) => {
  try {
    const name = req.params.name;

    const user = await Users.findOne({name});

    if (!user) {
      const error = new errorHundle("User not found");
      error.status = 404;
      return next(error);
    }
    res.status(201).json({ status: "success", data: { user } });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong!!" });
  }
};

//   update user
exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Users.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const filterData = filterObj(req.body, "name", "email", "imageURL");
    const updateUser = await Users.findByIdAndUpdate(user, filterData, {
      runValidators: true,
      new: true,
    });

    res.status(201).json({
      status: "success",
      updateUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!!" });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await Users.findByIdAndDelete(id, { active: false });
    if (!user) {
      res.status(404).json({
        status: "fail",
        message: "User Not Found!!",
      });
      res.status(204).json({
        status: "success",
        message: "User Deleted successfully",
        data: null,
      });
    }
  } catch (error) {
    res.status(500).json({ error, message: "Something went wrong!!" });
  }
  next();
};



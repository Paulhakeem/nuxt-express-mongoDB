const express = require("express")
const authController = require("../controllers/authController")
const userController = require("../controllers/userController")
const userProfile  = require("../controllers/profileController")

const router = express.Router()


router.route("/signup").post(authController.createUser)
router.route("/login").post(authController.loginUser)
router.route("/users").get(userController.getAllUsers)
router.route("/user/:name").get(userController.findUser)
router.route("/update/:id").patch(userController.updateUser)
router.route("/delete/:id").delete(userController.deleteUser)
router.route("/profile").get(userProfile.userProfile)


module.exports = router
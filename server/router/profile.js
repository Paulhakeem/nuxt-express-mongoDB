const express = require("express")
const userHome = require("../controllers/profileController")

const router = express.Router()


router.route('/profile').get(userHome.userProfile)


module.exports = router
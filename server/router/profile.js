const express = require("express")
const profile = require("../controllers/profileController")

const router = express.Router()


router.route('/profile').get(profile.userProfile)


module.exports = router
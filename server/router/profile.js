const user = require("../controllers/profileController")
const upload = require("../controllers/upload")

const express = require('express')

const router = express.Router();

router.route('/profile').get(user.userProfile)
router.route('/upload').post()

module.exports = router;
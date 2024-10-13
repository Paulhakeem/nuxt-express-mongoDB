const user = require("../controllers/profileController")

const express = require('express')

const router = express.Router();

router.route('/profile').get(user.userProfile)

module.exports = router;
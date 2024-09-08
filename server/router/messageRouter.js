const express = require('express')
const messageController = require('../controllers/messages')

const router = express.Router()

router.route("/message").post(messageController.sendMessage)
router.route("/messages").get(messageController.getMessages)


module.exports = router
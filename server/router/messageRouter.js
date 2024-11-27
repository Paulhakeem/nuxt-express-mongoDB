const express = require("express");
const messageController = require("../controllers/messages");

const auth = require("../middleware/checkUser");

const router = express.Router();

router.route("/message").post(messageController.createMessage);
router.route("/messages").get(auth.user, messageController.getMessages);
router.route("/message/:id").delete(auth.user,messageController.deleteMessage);

module.exports = router;

const express = require("express");
const http = require("http")
const cors = require("cors");
const bodyParser = require("body-parser");
const env = require("dotenv");
const mongoose = require("mongoose");
const usersRouter = require("./../router/userRouter");
const messageRouter = require("../router/messageRouter");
const user = require("../router/profile")
const helmet = require("helmet");
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app)
const io = socketio(server)

env.config({ path: "./config.env" });
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

// Run when client connect
io.on("connection", Socket => {
  console.log('New connection');
  
})

mongoose.connect(process.env.MONGO_CONN, {}).then((conn) => {
  console.log("connection successful!!");
});


// models
require("../model/chatRoom")
require("../model/user")
require("../model/messages")


// Router
app.use("/api", usersRouter);
app.use("/api", messageRouter);
app.use("/api", user);

server.listen(5000, () => {
  console.log("Server is running");
});

// HUNDLE SERVER ERROR
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("server shuts down..");
  server.close(() => {
    process.exit(1);
  });
});






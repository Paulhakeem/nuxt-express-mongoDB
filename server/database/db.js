const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const env = require("dotenv");
const mongoose = require("mongoose");
const usersRouter = require("./../router/userRouter");
const messageRouter = require("../router/messageRouter");
const user = require("../router/profile");
const helmet = require("helmet");
const socketio = require("socket.io");
const Message = require("../model/messages");
const users = require("../model/user");
const Chat = require("../model/private-chat")

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PATCH', 'DELETE']
  },
});

env.config({ path: "./config.env" });
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_CONN, {}).then((conn) => {
  console.log("connection successful!!");
});

// Router
app.use("/api", usersRouter);
app.use("/api", messageRouter);
app.use("/api", user);

// RUN WHEN CLIENT CONNECTED
io.on("connection", (socket) => {
  console.log("A user with ID: " + socket.id + " connected");

  // Send existing messages to the connected client
  Message.find()
    .sort({ date: 1 })
    .exec()
    .then((messages) => {
      socket.emit("chats", messages);
    });

  // geting users
  users.find().then((joinusers) => {
    socket.emit("users", joinusers);
  }); 

  // Listen for new messages from the client
  socket.on("createMessage", async (msg) => {
    const message = new Message(msg);
    await message
      .save()
      .then(() => {
        io.emit("createMessage", msg);
      })
      .catch((err) => {
        return err.message;
      });
  });




  // PRIVATE CHATING
  socket.on("private-text", async(message)=>{
    const text = new Chat(message)
    await text.save().then(()=>{
      console.log(message);
      
    })
    
  })


  // DISCONNECTED
  socket.on("disconnect", () => {
    console.log("User with ID: " + socket.id + " disconnected");
    io.emit("A user left the chat");
  });
});

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

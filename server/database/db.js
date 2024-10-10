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

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const corsOptions = {
  origin: "http://localhost:5173/", // some legacy browsers (IE11, various SmartTVs) choke on 204
};

env.config({ path: "./config.env" });
app.use(cors(corsOptions));
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
  Message.find().then((messages) => {
    socket.emit("chats", messages);
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
        alert(err)
      });
  });



  // DISCONNECTED
  socket.on("disconnect", () => {
    console.log("User disconnected");
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

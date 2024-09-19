const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const env = require("dotenv");
const mongoose = require("mongoose");
const usersRouter = require("./../router/userRouter");
const messageRouter = require("../router/messageRouter");
const helmet = require("helmet");

const app = express();
;

env.config({ path: "./config.env" });
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(express.static("./front"));

mongoose.connect(process.env.MONGO_CONN, {}).then((conn) => {
  console.log("connection successful!!");
});

// Router
app.use("/api", usersRouter);
app.use("/api", messageRouter);

const server = app.listen(5000, () => {
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






// initiating the server
const express = require("express");
const server = express();
server.use(express.json());

// importing routers
const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");

// wiring the routers
server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);
server.use("/api/tasks", taskRouter);

server.use("*", (req, res) => {
  res.status(400).json({ message: "bad end point" });
});

module.exports = server;

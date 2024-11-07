const express = require("express");
require("dotenv").config();

const mongoose = require("mongoose");
const app = express();

const mongoUsername = process.env.USERNAME;
const mongoPassword = process.env.PASSWORD;
const mongoHost = process.env.HOST;
const mongoPort = process.env.MONGOPORT;
const mongoDatabase = process.env.DATABASE;

// Construct the MongoDB connection URI
const mongoUri = `mongodb://${mongoUsername}:${mongoPassword}@${mongoHost}:${mongoPort}/?authSource=admin`;
const PORT = 3000;

app.listen(PORT, async () => {
  // try {
  //   await mongoose.connect(mongoUri);
  //   console.log("Connection Successfully");
  //   console.log("Server is listeninig on port ", PORT);
  // } catch (error) {
  //   console.log(mongoUsername, mongoPassword, error);

  //   process.exit(0);
  // }
  console.log("Server is listeninig on port ", PORT);
});

app.get("/", (req, res) => {
  res.send("Hello from container");
});

app.get("/health", (req, res) => {
  return res.status(200).json({
    message: "Everything is Good here 😊",
  });
});

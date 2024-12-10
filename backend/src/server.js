const express = require("express");
const mongoose= require("mongoose");
const app = express();


require('dotenv').config();
const cors = require("cors")

//From the database and models
const database = require("./databaseConnection.js/database.js");

const authRouter = require("./Router/auth.js");
const HiringRouter = require("./Router/Hiring.js");
const UserRouter = require("./Router/user.js");
const ChatRouter = require("./Router/chatbot.js");
const payment = require("./Router/Payment.js");



app.use(cors({
  origin: process.env.CLIENT_URL,
  
  credentials: true, // Allow credentials (like cookies) if needed
}));



app.use(express.json())

app.get("/", (req, res) => {
  res.json({
    message: "hii there",
  });
});
app.use(express.json({ limit: "100mb" })); // Increase as needed
app.use(express.urlencoded({ limit: "100mb", extended: true }));

app.use('/',authRouter)
app.use("/",HiringRouter)
app.use("/",UserRouter)
app.use("/",ChatRouter)
app.use("/",payment)


database
  .then(() => {
    console.log("databse connected....");
    const Port = process.env.PORT||5000;
    app.listen(Port, () => {
      console.log("listenign.........."+Port);
    });
  })
  .catch(() => {
    console.error("something happend with database/ check you connection");
  });
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(console.log("Connected to MongoDB")).catch(err=>console.log(err));

app.use("/api/auth", authRoute);

app.use("/", (req, res) => {
    console.log("Main URL")
});

app.listen("5000", () => {
    console.log("Backend is online on port 5000")
});
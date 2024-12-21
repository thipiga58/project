const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routers/user.router");

const app = express();

app.use(cors());

app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb', extended: true}));

app.use("/", userRouter);

module.exports = app;
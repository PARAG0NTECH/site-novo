const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const slackRouter = require("./src/routes/SlackRouter");
const userRouter = require("./src/routes/UserRouter");
const computerRouter = require("./src/routes/ComputerRouter");
const statisticsRouter = require("./src/routes/StatisticsRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public", "CineGuardian")));

app.use(cors());

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index")
});

app.use("/slack", slackRouter)
app.use("/user", userRouter)
app.use("/computer", computerRouter)
app.use("/statistics", statisticsRouter)

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});

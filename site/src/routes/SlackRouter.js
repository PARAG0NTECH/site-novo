const express = require('express');
const router = express.Router();

const slack = require("../slackapi/Slack");

router.post("/send", async(req, res) => {
    const message = req.body.text;
    res.send(await slack.sendAlert(message));
});

module.exports = router;
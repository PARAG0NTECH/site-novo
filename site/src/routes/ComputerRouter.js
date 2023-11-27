const express = require('express');
const router = express.Router();

const controller = require("../controllers/ComputerController");

router.get("/find", async(req, res) => {
    controller.findAll(res);
});

module.exports = router;
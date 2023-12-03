const express = require('express');
const router = express.Router();

const controller = require("../controllers/ComputerController");

router.get("/find", async(req, res) => {
    controller.findAll(res);
});

router.get("/having", async(req, res) => {
    controller.findComputersHavingStatistics(res);
});

router.post("/reboot", async(req, res) => {
    controller.reboot(req, res);
});

module.exports = router;
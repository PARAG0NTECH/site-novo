const express = require('express');
const router = express.Router();

const controller = require("../controllers/StatisticsController");

router.get("/find/:idComputer", async(req, res) => {
    controller.findStatisticsByComputer(req, res);
});

module.exports = router;
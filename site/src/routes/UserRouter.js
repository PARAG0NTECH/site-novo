const express = require('express');
const router = express.Router();

const controller = require("../controllers/UserController");

router.post("/create", async(req, res) => {
    controller.create(req, res);
});

router.post("/login", async(req, res) => {
    controller.login(req, res);
});

router.get("/find", async(req, res) => {
    controller.findUserByType(req, res);
});

module.exports = router;
const model = require("../models/ComputerModel");

async function findAll(res){
    res.send(await model.findAll());
}

async function findComputersHavingStatistics(res){
    res.send(await model.findComputersHavingStatistics());
}

async function reboot(req, res){
    await model.reboot(req.body.idComputer)
    res.status(200).send("Reiniciado com sucesso");
}

module.exports = {
    findAll,
    findComputersHavingStatistics,
    reboot
}
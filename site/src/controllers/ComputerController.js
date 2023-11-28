const model = require("../models/ComputerModel");

async function findAll(res){
    return res.send(await model.findAll());
}

async function findComputersHavingStatistics(res){
    return res.send(await model.findComputersHavingStatistics());
}

module.exports = {
    findAll,
    findComputersHavingStatistics
}
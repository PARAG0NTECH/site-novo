const model = require("../models/StatisticsModel");

async function findStatisticsByComputer(req, res){
    res.send(await model.findStatisticsByComputer(req.params.idComputer));
}

async function findLatestStatisticsByComputer(req, res){
    res.send(await model.findLatestStatisticsByComputer(req.params.idComputer));
}

module.exports = {
    findStatisticsByComputer,
    findLatestStatisticsByComputer
}
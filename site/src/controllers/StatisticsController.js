const model = require("../models/StatisticsModel");

async function findStatisticsByComputer(req, res){
    return res.send(await model.findStatisticsByComputer(req.params.idComputer));
}

module.exports = {
    findStatisticsByComputer
}
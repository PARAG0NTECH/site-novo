const model = require("../models/ComputerModel");

async function findAll(res){
    return res.send(await model.findAll());
}

module.exports = {
    findAll
}
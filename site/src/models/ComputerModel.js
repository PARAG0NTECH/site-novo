const database = require("../database/config");

async function findAll(){
    const command = `
        SELECT * FROM tb_computers;
    `
    return await database.commit(command);
}

module.exports = {
    findAll
}
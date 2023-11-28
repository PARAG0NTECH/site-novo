const database = require("../database/config");

async function findAll(){
    const command = `
        SELECT * FROM tb_computers;
    `
    return await database.commit(command);
}

async function findComputersHavingStatistics() {
    const command = `
        SELECT DISTINCT tb_computers.*
        FROM tb_computers
        INNER JOIN tb_statistics ON tb_computers.id = tb_statistics.id_computer
        ORDER BY tb_computers.id DESC;
    `;
    return await database.commit(command);
}

module.exports = {
    findAll,
    findComputersHavingStatistics
}
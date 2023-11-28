const database = require("../database/config");

async function findStatisticsByComputer(idComputer){
    const command = `
        SELECT TOP 10 * 
        FROM tb_statistics 
        INNER JOIN tb_computers ON tb_statistics.id_computer = tb_computers.id 
        WHERE tb_statistics.id_computer = ${idComputer}
        ORDER BY tb_statistics.id DESC;
    `
    return await database.commit(command);
}

async function findLatestStatisticsByComputer(idComputer){
    const command = `
        SELECT TOP 1 * 
        FROM tb_statistics 
        INNER JOIN tb_computers ON tb_statistics.id_computer = tb_computers.id 
        WHERE tb_statistics.id_computer = ${idComputer}
        ORDER BY tb_statistics.id DESC;
    `
    return await database.commit(command);
}

module.exports = {
    findStatisticsByComputer,
    findLatestStatisticsByComputer
}
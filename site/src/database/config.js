const sql = require('mssql');

// CONEXÃO DO SQL SERVER - AZURE (NUVEM)
const sqlServerConfig = {
    server: "ec2-44-194-47-186.compute-1.amazonaws.com",
    database: "cineguardian",
    user: "sa",
    password: "Cine@2023!",
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false, // for Azure
        trustServerCertificate: true // Accept self-signed certificates
    }
}

function commit(command) {
    return new Promise(function (resolve, reject) {
        sql.connect(sqlServerConfig).then(function () {
            return sql.query(command);
        }).then(function (resultados) {
            console.log(resultados);
            resolve(resultados.recordset);
        }).catch(function (erro) {
            reject(erro);
            console.log('ERRO: ', erro);
        });
        sql.on('error', function (erro) {
            return ("ERRO NO SQL SERVER (Azure): ", erro);
        });
    });
}

module.exports = {
    commit
}

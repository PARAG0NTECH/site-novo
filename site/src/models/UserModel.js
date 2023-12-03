const database = require("../database/config")

async function create({ name, email, password, type }){
    const command = `
        INSERT INTO tb_users (name, email, password, type_user, fk_empresa) VALUES ('${name}', '${email}', '${password}', '${type}', 1);
    `
    await database.commit(command);
}

function login(email, password){
    const command = `
        SELECT * FROM tb_users WHERE email = '${email}' AND password = '${password}';
    `
    return database.commit(command);
}

function findUserByType(type){
    const command = `
        SELECT * FROM tb_users WHERE type_user = '${type}';
    `
    return database.commit(command);
}

module.exports = {
    create,
    login,
    findUserByType
}
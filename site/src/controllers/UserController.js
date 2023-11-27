const model = require("../models/UserModel");

async function create(req, res) {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        type: req.body.type
    }
    await model.create(user);
    res.send("Cadastrado com sucesso!");
}

async function login(req, res) {
    const user = await model.login(req.body.email, req.body.password);
    if(user.length <= 0) { 
        res.status(400).send({ message: "E-mail ou Senha inválidos"});
    } else {
        res.send(user);
    }
    
}

async function findUserByType(req, res) {
    const type = req.query.type;
    res.send(await model.findUserByType(type));
}

module.exports = {
    create,
    login,
    findUserByType
}
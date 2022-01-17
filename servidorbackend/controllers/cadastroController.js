//Requisições de módulos externos à aplicação do NodeJs.

const express = require('express');
const paciente = require('../models/paciente.js');
const clinica = require('../models/clinica.js');
const bcrypt = require('bcrypt');

const router = express.Router();

//Rotas para manipulação do cadastro do paciente.

router.get('/paciente/busca', async (req, res) => {

    const data = req.query.cpf;
    const inst_paciente = new paciente(data);

    try{

        //Faz a consulta do paciente e aguarda a resposta.
        const results = await inst_paciente.consultar();

        if(results.length == 0){

            res.send(JSON.stringify({user: true}));
        }else{

            res.send(JSON.stringify({user: false}));
        }

    }catch(erro){

        res.send(JSON.stringify({response: "erro"}));
    }
});

router.post('/paciente', async (req, res) => {

    const data = (req.body);

    try{

        //Encriptação do password.
        const encrypted = await bcrypt.hash(data.senha, 10);

        const inst_paciente = new paciente(data.cpf, data.nome, data.endereco, data.telefone,
        data.email, encrypted);

        await inst_paciente.cadastrar();

        res.sendStatus(201);

    }catch(error){

        res.send(JSON.stringify({response: "erro"}));
    }
});

//Rotas para manipulação do cadastro da clínica.

router.get('/clinica/busca', async (req, res) => {

    const data = req.query.cnpj;
    const inst_clinica = new clinica(data);

    try{

        //Faz a consulta da clínica e aguarda a resposta.
        const results = await inst_clinica.consultar();

        if(results.length == 0){

            res.send(JSON.stringify({user: true}));
        }else{

            res.send(JSON.stringify({user: false}));
        }

    }catch(erro){

        res.send(JSON.stringify({response: "erro"}));
    }
});

router.post('/clinica', async (req, res) => {

    const data = (req.body);

    try{

        //Encriptação do password.
        const encrypted = await bcrypt.hash(data.senha, 10);

        const inst_clinica = new clinica(data.cnpj, data.nome, data.endereco, data.telefone,
        data.logomarca, data.plataformas, data.email, encrypted);

        await inst_clinica.cadastrar();

        res.sendStatus(201);

    }catch(error){

        res.send(JSON.stringify({response: "erro"}));
    }
});

module.exports = app => app.use('/cadastro', router); 
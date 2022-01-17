//Requisições de módulos externos à aplicação do NodeJs.
const mysql  = require('mysql');
const database = require('../data/data.js');

const clinica = function(cnpj = "", nome = "", end = "", tel = "", logo = "", plat = "",
email = "", senha = ""){

    this.cnpj = cnpj;
    this.nome = nome;
    this.end = end;
    this.tel = tel;
    this.logo = logo;
    this.plat = plat;
    this.email = email;
    this.senha = senha;

    //Métodos do objeto para serem utilizados.

    const consultar = () => new Promise(async (resolve, reject) => {

        const banco = new database();

        try{

            //Aguarda a conexão com o banco de dados.
            await banco.conectar();
            
            //Fazer a busca pelo usuário de acordo com a chave primária.

            const query = "SELECT * FROM clinica WHERE clin_cnpj = " + mysql.escape(cnpj);
            const results = await banco.query(query);

            await banco.desconectar();

            resolve(results);

        }catch(error){

            reject(error);
        }
    });

    const cadastrar = () => new Promise(async (resolve, reject) => {

        const banco = new database();

        try{

            //Aguarda a conexão com o banco de dados.
            await banco.conectar();
            
            //Insere os usuários no banco de dados de acordo com os parâmetros informados.
            const query = "INSERT INTO clinica (clin_cnpj, clin_nome, clin_end, clin_telefone, " +
            "clin_logo, clin_platvideo, clin_email, clin_senha) VALUES (?)";          
            
            const results = await banco.query(query, [cnpj, nome, end, tel, logo, plat, email, senha]);

            await banco.desconectar();
            resolve(results);

        }catch(error){

            reject(error);
        }
    });

    //Atribuição dos métodos para chamada externa.
    this.consultar = consultar;
    this.cadastrar = cadastrar;  
}

module.exports = clinica;
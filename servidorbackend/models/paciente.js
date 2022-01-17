//Requisições de módulos externos à aplicação do NodeJs.
const mysql  = require('mysql');
const database = require('../data/data.js');

//Implementação do objeto.

const paciente = function(cpf = "", nome = "", end = "", tel = "", email = "", senha = ""){

    //Atributos da conexão com o banco de dados.
    this.cpf = cpf;
    this.nome = nome;
    this.end = end;
    this.tel = tel;
    this.email = email;
    this.senha = senha;

    //Métodos do objeto para serem utilizados.

    const consultar = () => new Promise(async (resolve, reject) => {

        const banco = new database();

        try{

            //Aguarda a conexão com o banco de dados.
            await banco.conectar();
            
            //Fazer a busca pelo usuário de acordo com a chave primária.

            const query = "SELECT * FROM paciente WHERE pct_cpf = " + mysql.escape(cpf);
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
            const query = "INSERT INTO paciente (pct_cpf, pct_nome, pct_end, pct_telefone, " +
            "pct_email, pct_senha) VALUES (?)";          
            
            const results = await banco.query(query, [cpf, nome, end, tel, email, senha]);

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

module.exports = paciente;
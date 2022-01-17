//Requisições de módulos externos à aplicação do NodeJs.

const mysql  = require('mysql');

//Implementação do objeto.

const database = function banco(){

    //Atributos da conexão com o banco de dados.
    const host = "localhost";
    const user = "root";
    const database =  "med_center";
    const password = "";

    const con = mysql.createConnection({
        host: host,
        user: user,
        database: database,
        password: password
    });

    //Métodos de conexão e desconexão.

    const conectar = () => new Promise((resolve, reject) => {

        con.connect(error => {

            if(error){
                
                reject(error)
            }else{
                resolve();
            }
        });
    });

    const desconectar = () => new Promise((resolve, reject) => {

        con.end(error => {

            if(error){
                
                reject(error)
            }else{
                resolve();
            }
        });
    });

    const query = (param, values) => new Promise((resolve, reject) => {

        if(typeof values != undefined){
            
            con.query(param, [values], (err, results) => {
                
                if(err) reject(err); else resolve(results);
            });

        }else{

            con.query(param, (err, results) => {
                
                if(err) reject(err); else resolve(results);
            });
        }
    });

    //Atribuição dos métodos para chamada externa.
    this.conectar = conectar;
    this.desconectar = desconectar;
    this.query = query;
};

module.exports = database;
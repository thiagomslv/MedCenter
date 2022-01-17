//Requisições de módulos externos à aplicação do NodeJs.

const http = require('http');
const express = require('express');

//Constantes utilizadas no código.

const port = 35200;

//Inicialização do servidor express.

const app = express();
app.set('port', port);

//Configuração do CORS. Detalhes em: https://enable-cors.org/server_expressjs.html

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8081"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Configuração do parsing dos pacotes recebidos via HTTP.

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Criação do servidor HTTP.

const server = http.createServer(app);
server.listen(port);
console.log("Servidor HTTP iniciado na porta " + port);

//Colocando as rotas na função principal.

require('./controllers/cadastroController.js')(app);
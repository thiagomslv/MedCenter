//Requisições de módulos externos à aplicação do NodeJs.

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

//Constantes utilizadas no código.
const app = express();

//Inicialização do servidor express.
const port = 54305;
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

//Lógica de programação do chat.

const options = {

    cors:{
        
        origin: "http://localhost:8081",
        methods: ["GET", "POST"],
        transports: ['websocket'],
        //allowEIO3: true, // false by default
        //transports: ['websocket', 'polling'],
        credentials: true
    }
};

//Vetor de objetos que vai receber as conexões.

const io = new Server(server, options);

io.on('listening', () => {

    console.log("Servidor WS iniciado.");
});

io.on('connection', socket => {

    console.log(`Socket conectado com o ID ${socket.id}`);

    socket.on('initial', (msg) => {

        console.log('message: ' + msg);
    });
    
})
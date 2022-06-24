const express = require('express');
const db = require('./db/connection');
const app = express();

const PORT = 3000;

//DB CONNECTION
db.authenticate()
    .then(() => {
        console.log('Banco de dados conectato com sucessor');
    })
    .catch(error => {
        console.error('Erro ao conectar com banco de dados ', error);
    });


//ROUTES
app.get('/', function(req, res){
    res.send('Projeto funcionando tudo certo');
});


app.listen(PORT, function(){
    console.log(`O Express está rodando na porta ${PORT}`);
});

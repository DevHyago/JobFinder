const express = require('express');
const app = express();
const db = require('./db/connection');

const PORT = 3000;

//DB CONNECTION
db.authenticate()
    .then(() => {
        console.log('Banco de dados conectato com sucesso');
    })
    .catch(error => {
        console.error('Erro ao conectar com banco de dados ', error);
    });


//ROUTES
app.get('/', function(req, res){
    res.send('Projeto funcionando tudo certo');
});


app.listen(PORT, function(error){
    if(error){
        console.error('Erro no servidor: ', error);
    }else{
        console.log(`O Express está rodando na porta ${PORT}`);
    }
});

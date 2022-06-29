const express    = require('express');
const app        = express();
const db         = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 3000;

app.listen(PORT, function(error){
    if(error){
        console.error('Erro no servidor: ', error);
    }else{
        console.log(`O Express está rodando na porta ${PORT}`);
    }
});

//body parser
app.use(bodyParser.urlencoded({extended: false}));

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

//Jobs Routes
app.use('/jobs', require('./routes/jobs'));


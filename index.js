const express = require('express');
const app = express();
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');

connection
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  })
  .catch((msgErro) => {});

//SETANDO EJS COMO VIEW ENGINE
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//ROTAS

app.get('/', (req, res) => {
  Pergunta.findAll({ raw: true }).then((perguntas) => {
    res.render('index', {
      perguntas: perguntas,
    });
  });
});

app.get('/perguntar', (req, res) => {
  res.render('perguntar');
});

app.post('/salvarpergunta', (req, res) => {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  Pergunta.create({
    titulo: titulo,
    descricao: descricao,
  }).then(() => {
    res.redirect('/');
  });
});

app.listen(8080, () => {
  console.log('App rodando!');
});

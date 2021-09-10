const express = require('express');
const app = express();
const connection = require('./database/database');

connection
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  })
  .catch((msgErro) => {});

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//ROTAS

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/perguntar', (req, res) => {
  res.render('perguntar');
});

app.post('/salvarpergunta', (req, res) => {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  res.send(
    'Formulário Recebido! Título: ' + titulo + ' ' + 'Descrição:  ' + descricao,
  );
});

app.listen(8080, () => {
  console.log('App rodando!');
});

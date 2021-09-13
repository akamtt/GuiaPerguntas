const Sequelize = require('sequelize');
const connection = require('./database');

//CRIAÇÃO DA TABELA DE BANCO DE DADOS
const Pergunta = connection.define('perguntas', {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

//NÃO FORÇAR A CRIAR UMA TABELA JA CRIADA.
Pergunta.sync({ force: false }).then(() => {});

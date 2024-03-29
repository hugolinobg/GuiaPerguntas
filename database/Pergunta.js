const Sequelize = require("sequelize");
const connection = require("./database");

const Pergunta = connection.define("perguntas", {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

Pergunta.sync({ force: false })
  .then(() => {
    console.log("Tabela criada com sucesso!");
  })
  .catch(erro => {
    console.log("Erro ao criar a tabela" + erro);
  });

module.exports = Pergunta;

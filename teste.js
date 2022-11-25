
//Variaveis de conexao com o banco de dados
const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', '123456', {
    host: 'localhost',
    dialect: "mysql"
});
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


//teste no cmd ou console

/*
sequelize.authenticate().then(function () {
    console.log("conectado com sucesso!");
}).catch(function (erro) {
    console.log("Falha ao se conectar: " + erro);
});

*/

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

//          Postagem.sync({force:true});            //Forca a criacao da tabela

Postagem.create({
    titulo: "Acrescente um titulo",
    conteudo: "Acrescente um conteudo"
});


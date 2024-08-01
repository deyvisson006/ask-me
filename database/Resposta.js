const { Sequelize } = require('@sequelize/core')
const connection = require('./database')
const Pergunta = require('./Pergunta')

const Resposta = connection.define('respostas',{
    corpo: {type: Sequelize.TEXT, allowNull: false},
    perguntaId: {type: Sequelize.INTEGER, allowNull: false}
})

Resposta.sync({force: true})
    .then(()=>{
        console.log('Tabela resposta sincronizada')
    }).catch((error) =>{
        console.error('Erro ao sincronizar a tabela resposta')
    })

module.exports = Resposta
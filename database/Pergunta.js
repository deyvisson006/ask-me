const { Sequelize } = require('@sequelize/core')
const connection = require('./database')

const Pergunta = connection.define('pergunta',{
    titulo: {type: Sequelize.STRING, allowNull: false},
    descricao: {type: Sequelize.TEXT, allowNull: false}
})

//CREATE TABLE IF NOT EXISTS
Pergunta.sync({force: true})
    .then(()=>{
        console.log('Tabela pergunta sincronizada')
    })
    .catch((error) =>{
        console.log('Erro ao criar a tabela', error)
    })


    module.exports = Pergunta;
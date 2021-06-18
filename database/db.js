/*
const Sequelize = require('sequelize');

const connection = new Sequelize('crud_node_db_sweet','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

 connection.authenticate().then(function (){
    console.log('Conectado com sucesso!');
}).catch(function(erro){
    console.log('Falha ao se conectar: '+erro);
});

module.exports = connection;

*/

const mysql = require('mysql');

const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'crud_node_db_sweet'
})



 //Teste de Conexão com o banco de dados Mysql
 conexion.connect((error)=>{
    if (error) {
        console.error('Erro ao conectar bom o banco de dados: '+error);
        return
    }

    console.log('Banco conectado com sucesso!');
 });

module.exports = conexion;
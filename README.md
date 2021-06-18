# CRUD-COM-BOOTSTRAP-DATATABLE-E-SWEET-BOXICONS
CRUD NODE JS COM BOOTSTRAP DATATABLE E SWEET BOXICONS

/******************************************************************************/

Projeto inicial - Node JS que mostra um crud simples usando express.js, nodemon, sequelize.js, mysql2, mysql e o body-parser com uma comunicação muito simples com o mysql,
com o intuito de cadastrar, editar e deletar usuario.

Caso deseje visualizar o projeto em execução segue o link: https://drive.google.com/file/d/1FOZqRa-tZJORBmyUFQIQ3Zdj-NY9olfj/view?usp=sharing

/******************************************************************************/

/*
* Primeiro comando npm init
*/

/*
* Primeiro framework usado sera o  express.js
*
* Onde achar a documentação: https://expressjs.com/pt-br/
*
* Express.js é um framework para Node.js que fornece recursos mínimos para construção de servidores web. 
* Foi lançado como software livre e de código aberto sob a Licença MIT. É um dos mais populares frameworks 
* para servidores em Node.js
*
* Comando: npm install express --save
*/
/*
* Segundo framework usado sera o  ejs.js
*
* Onde achar a documentação: https://ejs.co/
*
* EJS é uma linguagem de modelagem simples que permite gerar marcação HTML com JavaScript simples. 
* Sem religiosidade sobre como organizar as coisas. Sem reinvenção de iteração e fluxo de controle. 
*É simplesmente JavaScript.
*
* Comando: npm install ejs --save
*/


/*
* Terceiro framework usado sera o  nodemon.js
*
* Onde achar a documentação: https://www.npmjs.com/package/nodemon
*
* O nodemon é um utilitário de interface de linha de comando (CLI) desenvolvido pelo @rem que encapsula 
* seu aplicativo Node, monitora o sistema de arquivos e reinicia o processo automaticamente.
*
* Comando: npm install nodemon --save 
*/

/******************************************************************************/

/******************************************************************************

Quarto framework usado sera o body-parser.js

Como req.bodya forma de é baseada na entrada controlada pelo usuário, todas as 
propriedades e valores neste objeto não são confiáveis ​​e devem ser validados antes de confiar. 
Por exemplo, req.body.foo.toString()pode falhar de várias maneiras, por exemplo, a foopropriedade 
pode não estar lá ou pode não ser uma string e toStringpode não ser uma função e, em vez disso, 
uma string ou outra entrada do usuário.

comando: npm install body-parser --save 

******************************************************************************/

/*****************************************************************************

Quinto framework usado sera o sequelize

Sequelize, segundo o site oficial, é um ORM para Node.js baseado em Promises, 
para os bancos PostgreSQL, MySQL, MariaDB, SQLite e MS SQL Server. Então se você não usa 
MySQL mas usa qualquer um desses outros bancos aí, deve conseguir adaptar este tutorial 
para sua realidade.

comando : npm i --save sequelize

*****************************************************************************/

/*****************************************************************************

Sexto comando para instalar as dependencias do SGBD que irei usar (MYSQL)

comando :

npm i --save mysql2

*****************************************************************************/


/*****************************************************************************

Setimo comando para que eu posso usar querys 

comando :

npm install mysql

*****************************************************************************/

/*****************************************************************************************
* BIBLIOTECAS USADAS 
******************************************************************************************/

/****************************************************************************************
  
Bootsstrap:  https://getbootstrap.com/docs/4.6/getting-started/introduction/

******************************************************************************************/

/*****************************************************************************************

Boxicons:  https://boxicons.com/

******************************************************************************************/

/*****************************************************************************************

Datatable:  https://datatables.net/extensions/buttons/examples/html5/simple.html

******************************************************************************************/


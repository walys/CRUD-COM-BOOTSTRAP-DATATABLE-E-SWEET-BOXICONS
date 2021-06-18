const express = require('express');
const app = express();
const  bodyParser  = require ('body-parser');

app.set('view engine', 'ejs');

//Estou chamando todos os meus arquivos estaticos
app.use(express.static('public'));

// Body Parcer
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//OU 
//app.use(express.urlencoded({extended:false}));
//app.use(express(json));

app.use('/', require('./router'));


app.listen(3000, ()=>{
    console.log('SEVER CARREGADO EM http://localhost:3000')
});
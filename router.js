const { render } = require('ejs');
const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

//ROTA PARA MINHA PAGINA INICIAL COM UMA QUERY
router.get('/', (req, res)=>{
  
    
 conexion.query('SELECT * FROM users', (error, results)=>{
    
    if(error){
        throw error;
    }else{
        res.render('index', {results:results});
    }

 })
})

//ROTA DA MINHA PAGINA PARA CADASTRAR MEU USUARIO
router.get('/create', (req, res)=>{
    res.render('create')
})

//ROTA DA MINHA PAGINA DE EDIÇÃO DO MEU USUARIO
router.get('/edit/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id= ?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit', {user:results[0]});
        }
    });
});

//ROTA PARA DELETAR(EXCLUIR) MEU USUARIO 
router.get('/delete/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM users WHERE id = ?', [id], (error, results)=>{
    
        if(error){

            throw error;

        }else{

            res.redirect('/');
        }
    
     })

});


const Crud = require('./controllers/crud');
router.post('/save', Crud.save);
router.post('/update', Crud.update);

module.exports = router;
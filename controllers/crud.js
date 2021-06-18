const conexion = require('../database/db');

exports.save = (req, res)=>{
    const users = req.body.users;
    const rol = req.body.rol;
    //console.log(users +" - "+rol);
    conexion.query('INSERT INTO users SET ?', {users:users, rol:rol}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    });
}


exports.update = (req, res)=>{
    const users = req.body.users;
    const rol = req.body.rol;
    const id = req.body.id;
    //console.log(users +" - "+rol+" - "+id);
    conexion.query('UPDATE users SET ? WHERE id = ?', [{users:users, rol:rol}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    });
}
const mysql = require('mysql2');
var express = require("express");

const path = require('path');

var app = express();


app.use(express.json());
app.use(express.urlencoded({extended:false})); 
app.use(('/logar'), express.static('Frontend'))
app.use(('/cadrastar'), express.static('Frontend'));

app.get('/logar', function(req, res){
    res.sendFile(__dirname + '/Frontend/login.html')
})

app.get('/cadrastar', function(req, res){
    res.sendFile(__dirname +'/Frontend/cadrastp.html')
})

app.post('/login-se', function(req, res){
    let username = req.body.User
    let senha = req.body.password
    connection.query(`SELECT * FROM cadrasto_de_usuario WHERE Usuario = ? AND Senha = ?`, [username, senha], function(erro, result){
        if(erro){
            console.log(erro)
        }
        console.log(result)
        if(result == ""){
            res.redirect('/logar')
        }
        else{
            res.redirect('/')
        }
    })
})


app.post('/Cadrasta-se', function(req, res){
    let Usuario3 = req.body.Usuario
    let Senha = req.body.Senha
    let sql = `INSERT INTO cadrasto_de_usuario (Usuario, Senha) VALUES ('${Usuario3}', '${Senha}')`;
    connection.query(`SELECT Usuario FROM cadrasto_de_usuario WHERE Usuario = ?`, [Usuario3], function(err, result){
        if(err){
            console.log(err)
        }
        if (result == ""){
            connection.query(sql, function(erro, certo){
                if(erro){
                    console.log(erro)
                } 
                return console.log(certo)
            })
        }
        else{
            return console.log(result)
        }
    })
    res.redirect('/')
})


app.listen(3000, function(){
    console.log('Sevirdor rodando no url = localhost:3000')
})
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Gnr64puto1!',
    database: 'cadrasto',
})

connection.connect (function (error){
    console.log("boa porro")
});



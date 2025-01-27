function login(){
    var usuario = document.getElementById('User').value
    var senha = document.getElementById('password').value
    if(usuario.length > 6 && senha.length >7){
        document.getElementById('btn_login').disabled = false
    }
    else{
        document.getElementById('btn_login').disabled = true
    }
}

function mostrar_senha2(){
    var senha = document.getElementById('password')
    var icon = document.getElementById('icon-Senha-login')

    if (senha.type == "password"){
        senha.type = 'text'
        icon.classList.add('mostrar')
    }
    else{
        senha.type = 'password'
        icon.classList.remove('mostrar')
    }
}

const usuario = document.getElementById('User')
const senha = document.getElementById('password')
var icon = document.getElementById('icon-Senha-login')

senha.addEventListener('focus', function(){
    setTimeout(1000);
    if (icon.style.opacity == 0){
        icon.classList.add('anima')
        icon.classList.remove('anima2')
    }
    else{
        ;
    }
})
senha.addEventListener('blur', function(){
    setTimeout(1000);
    if (icon.style.opacity == 0){
        icon.classList.add('anima2')
        icon.classList.remove('anima')
    }
    else{
        ;
    }
})


usuario.addEventListener("keyup", function(event){
    if (event.key == " "){
        usuario.value = "";
    }
})

senha.addEventListener("keyup", function(event){
    if (event.key == " "){
        senha.value = "";
    }
})
function register(){
    const campoSenha = document.getElementById('Senha').value
	const campoConfirmarSenha = document.getElementById('ConfirmaçãoSenha').value
    const campoNome = document.getElementById('Usuario').value
    const icon = document.getElementById('icon-Senha')
    
	if (campoSenha == campoConfirmarSenha && campoSenha.length > 7 && campoNome.length > 6){
        document.getElementById('registrar').disabled = false
        icon.classList.add('amite')
    }
    else
    {
        document.getElementById('registrar').disabled = true
        icon.classList.add('amite2')
    }
}


function mostrar_senha(){
    const campoSenha = document.getElementById('Senha')
    const ConfirmaçãoSenha = document.getElementById('ConfirmaçãoSenha')
    const icon = document.getElementById('icon-Senha')
    const icon2 = document.getElementById('icon-Senha2')

    if (campoSenha.type == 'password'){
        campoSenha.setAttribute('type','text')
        ConfirmaçãoSenha.setAttribute('type','text')
        icon.classList.add('mostrar')
        icon2.classList.add('mostrar')

        setTimeout(1000);
        if (icon.style.opacity == 0){
            icon.classList.add('anima')
            icon.classList.remove('anima2')
        }
    }
    else{
        campoSenha.setAttribute('type','password')
        ConfirmaçãoSenha.setAttribute('type','password')
        icon.classList.remove('mostrar')
        icon2.classList.remove('mostrar')
        setTimeout(1000);
        if (icon.style.opacity == 0){
            icon.classList.add('anima2')
            icon.classList.remove('anima')
        }
    }
}

const campoNome = document.getElementById('Usuario')
const campoSenha = document.getElementById('Senha')
const ConfirmaçãoSenha = document.getElementById('ConfirmaçãoSenha')
var icon = document.getElementById('icon-Senha')
var icon2 = document.getElementById('icon-Senha2')
var link = document.getElementById('mudar_local_login')

////// apagar o espaço em branco

campoNome.addEventListener('keyup', function(event){
    if (event.key == " "){
        campoNome.value = '';
    }
})

campoSenha.addEventListener('keyup', function(event){
    if (event.key == " "){
        campoSenha.value = '';
    }
})

ConfirmaçãoSenha.addEventListener('keyup', function(event){
    if (event.key == " "){
        ConfirmaçãoSenha.value = '';
    }
})



////// link abaixo do botão

link.addEventListener('mouseover', function(){
    link.classList.add('animaçãok')
    link.classList.remove('animaçãok2')
})

link.addEventListener('mouseout', function(){
    link.classList.remove('animaçãok')
    link.classList.add('animaçãok2')
})


////// icon na parte da senha

campoSenha.addEventListener('focus', function(){
    setTimeout(1000);
    if (icon.style.opacity == 0){
        icon.classList.add('anima')
        icon.classList.remove('anima2')
    }
    else{
        ;
    }
})
campoSenha.addEventListener('blur', function(){
    setTimeout(1000);
    if (icon.style.opacity == 0){
        icon.classList.add('anima2')
        icon.classList.remove('anima')
    }
    else{
        ;
    }
})

////// icon na parte de confirmar senha

ConfirmaçãoSenha.addEventListener('focus', function(){
    setTimeout(1000);
    if (icon2.style.opacity == 0){
        icon2.classList.add('anima')
        icon2.classList.remove('anima2')
    }
    else{
        ;
    }
})
ConfirmaçãoSenha.addEventListener('blur', function(){
    setTimeout(1000);
    if (icon2.style.opacity == 0){
        icon2.classList.add('anima2')
        icon2.classList.remove('anima')
    }
    else{
        ;
    }
})

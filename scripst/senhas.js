var senha1 = document.getElementById("senha2");
var senha2 =  document.getElementById("textTeclado");
var erro2 = document.getElementById("erro2");


function verificarSenhas(){

    if(senha1.innerText == senha2.innerText){

        tela_inicial();
        
    }else{

        senha1.style.border = "1px solid red";
        erro2.innerText = "Senha Invalida";
        senha1.innerText = "";
    }
}

function tela_inicial(){

    let telaBloque = document.getElementById("tela_bloqueio");
    telaBloque.style.display = "none";

    let telaIni = document.getElementById("tela_inicial");
    telaIni.style.display = "block";

}

/* BOTOES DOS APPS DA TELA INICIAL */

var b1Config = document.getElementById("bt_config");
var bt2fone = document.getElementById("bt_fone");
var bt3gomp = document.getElementById("bt_googleMp");
var bt4gale = document.getElementById("bt_galeria");
var bt5music = document.getElementById("bt_music");
var bt6calc = document.getElementById("bt_calcula");
var bt7anot = document.getElementById("bt_anota");
var bt8games = document.getElementById("bt_videoG");

b1Config.addEventListener("click",abrindo_tela_config);
bt2fone.addEventListener("click",abrindo_tela_telefone);
bt3gomp.addEventListener("click",abrindo_tela_googleMp);
bt4gale.addEventListener("click",abrindo_tela_galeria);
bt5music.addEventListener("click",abrindo_tela_playerMusic);
bt6calc.addEventListener("click",abrindo_tela_calculadra);


function abrindo_tela_config(){

    let telaconfigPrincipal = document.getElementById("abrir_tela_Configuracoes");
    telaconfigPrincipal.style.display = "block";

    let telaIni = document.getElementById("tela_inicial");
    telaIni.style.display = "none";
}

function abrindo_tela_telefone(){

    let telatelefPrincipal = document.getElementById("tela_telefone");
    telatelefPrincipal.style.display = "block";

    let telaIni = document.getElementById("tela_inicial");
    telaIni.style.display = "none";


}

function abrindo_tela_googleMp(){

    let telaGoogMpPrincipal = document.getElementById("tela_googleMaps");
    telaGoogMpPrincipal.style.display = "block";

    let telaIni = document.getElementById("tela_inicial");
    telaIni.style.display = "none";

}

function abrindo_tela_galeria(){

    let telaGaleriaPrincipal = document.getElementById("tela_Galeria");
    telaGaleriaPrincipal.style.display = "block";

    let telaIni = document.getElementById("tela_inicial");
    telaIni.style.display = "none";

}

function abrindo_tela_playerMusic(){

    let telaPlayermusPrincipal = document.getElementById("tela_playerMusic");
    telaPlayermusPrincipal.style.display = "block";

    let telaIni = document.getElementById("tela_inicial");
    telaIni.style.display = "none";

}

function abrindo_tela_calculadra(){

    let telacalcuPrincipal = document.getElementById("tela_calculadora");
    telacalcuPrincipal.style.display = "block";

    let telaIni = document.getElementById("tela_inicial");
    telaIni.style.display = "none";

}

function abrindo_tela_anotacoes(){

    let telaIni = document.getElementById("tela_inicial");
    telaIni.style.display = "none";

}

function abrindo_tela_games(){

    let telaIni = document.getElementById("tela_inicial");
    telaIni.style.display = "none";

}

/* BOTOES DE NAVEGÇAO RESPONSAVEIS POR VOLTAR A TELA ANTERIO, ESSES SÂO OS ICONS CIRCULO1 E RETANGULO1 */



var cir1 = document.getElementById("circulo1");
var cir2 = document.getElementById("circulo2");
var cir3 = document.getElementById("circulo3");
var cir4 = document.getElementById("circulo4");
var cir5 = document.getElementById("circulo5");
var cir6 = document.getElementById("circulo6");
var cir7 = document.getElementById("circulo7");


var ret1 = document.getElementById("retangulo1");
var ret2 = document.getElementById("retangulo2");
var ret3 = document.getElementById("retangulo3");
var ret4 = document.getElementById("retangulo4");
var ret5 = document.getElementById("retangulo5");
var ret6 = document.getElementById("retangulo6");
var ret7 = document.getElementById("retangulo7");



cir1.addEventListener("click",voltar);
cir2.addEventListener("click",voltar);
cir3.addEventListener("click",voltar);
cir4.addEventListener("click",voltar);
cir5.addEventListener("click",voltar);
cir6.addEventListener("click",voltar);
cir7.addEventListener("click",voltar)



ret1.addEventListener("click",voltar);
ret2.addEventListener("click",voltar);
ret3.addEventListener("click",voltar);
ret4.addEventListener("click",voltar);
ret5.addEventListener("click",voltar);
ret6.addEventListener("click",voltar);
ret7.addEventListener("click",voltar);



function voltar(){

    let telaIni = document.getElementById("tela_inicial");
    telaIni.style.display = "block";

    let telaconfigPrincipal = document.getElementById("abrir_tela_Configuracoes");
    telaconfigPrincipal.style.display = "none";

    let telatelefPrincipal = document.getElementById("tela_telefone");
    telatelefPrincipal.style.display = "none";

    let telaGoogMpPrincipal = document.getElementById("tela_googleMaps");
    telaGoogMpPrincipal.style.display = "none";

    let telaGaleriaPrincipal = document.getElementById("tela_Galeria");
    telaGaleriaPrincipal.style.display = "none";

    let telaPlayermusPrincipal = document.getElementById("tela_playerMusic");
    telaPlayermusPrincipal.style.display = "none";

    let telacalcuPrincipal = document.getElementById("tela_calculadora");
    telacalcuPrincipal.style.display = "none";
    
}
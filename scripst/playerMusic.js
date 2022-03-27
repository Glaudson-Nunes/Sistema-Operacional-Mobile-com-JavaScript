
var btPlay = document.getElementById("botao-play");
var btpausa = document.getElementById("botao-pause");
var pularM = document.getElementById("passar_musica");
var voltarM = document.getElementById("voltar_musica");
let btiniciar = document.getElementById("botao-iniciar");
let music = document.getElementById("audio1");
music.addEventListener("timeupdate", atualizarBarra);


btPlay.addEventListener("click",Playmusica);
btpausa.addEventListener("click",pausa);
pularM.addEventListener("click",avanmusica);
voltarM.addEventListener("click",dimimusica);


function Playmusica(){

    music.play();

    btPlay.style.display = "none";
    btpausa.style.display = "inline-block";
}


function pausa(){

    music.pause();

    btPlay.style.display = "inline-block";
    btpausa.style.display = "none";
}

function avanmusica(){

    music.currentTime += +10;

}

function dimimusica(){

    music.currentTime += -10;

}


function atualizarBarra(){

    let pro = document.getElementsByTagName("progress")[0];

    let music = document.getElementById("audio1");

    pro.style.width = Math.floor((music.currentTime / music.duration) *100) + '%';

    let inicio = document.getElementsByClassName("inicio")[0];

   
    inicio.textContent = Math.floor(music.currentTime);
    

}
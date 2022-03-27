/* apagar e adicionar fotos ao papel de parede */

var apagarFt1 = document.getElementById("lixeira1");
var apagarFt2 = document.getElementById("lixeira2");
var apagarFt3 = document.getElementById("lixeira3");
var apagarFt4 = document.getElementById("lixeira4");
var apagarFt5 = document.getElementById("lixeira5");
var apagarFt6 = document.getElementById("lixeira6");
var apagarFt7 = document.getElementById("lixeira7");
var apagarFt8 = document.getElementById("lixeira8");
var apagarFt9 = document.getElementById("lixeira9");

var addPapelP1 = document.getElementById("add1");
var addPapelP2 = document.getElementById("add2");
var addPapelP3 = document.getElementById("add3");
var addPapelP4 = document.getElementById("add4");
var addPapelP5 = document.getElementById("add5");
var addPapelP6 = document.getElementById("add6");
var addPapelP7 = document.getElementById("add7");
var addPapelP8 = document.getElementById("add8");
var addPapelP9 = document.getElementById("add9");

apagarFt1.addEventListener("click",apagarFOTO1);
apagarFt2.addEventListener("click",apagarFOTO2);
apagarFt3.addEventListener("click",apagarFOTO3);
apagarFt4.addEventListener("click",apagarFOTO4);
apagarFt5.addEventListener("click",apagarFOTO5);
apagarFt6.addEventListener("click",apagarFOTO6);
apagarFt7.addEventListener("click",apagarFOTO7);
apagarFt8.addEventListener("click",apagarFOTO8);
apagarFt9.addEventListener("click",apagarFOTO9);

addPapelP1.addEventListener("click",papel1);
addPapelP2.addEventListener("click",papel2);
addPapelP3 .addEventListener("click",papel3);
addPapelP4.addEventListener("click",papel4);
addPapelP5.addEventListener("click",papel5);
addPapelP6.addEventListener("click",papel6);
addPapelP7.addEventListener("click",papel7);
addPapelP8.addEventListener("click",papel8);
addPapelP9.addEventListener("click",papel9);



function papel1(){

    let telaIni = document.getElementById("tela_inicial");
    telaIni.style.backgroundImage = 'URL(imgs/albums/foto1.jpg)';
    telaIni.style.backgroundSize = "365px";

    let abr1 = document.getElementById("img_aberta1");
    abr1.style.display ="none";

    telaIni.style.display = "block";


}

function papel2(){

    let telaIni = document.getElementById("tela_inicial");
    telaIni.style.backgroundImage = 'URL(imgs/albums/foto2.jpg)';
    telaIni.style.backgroundSize = "365px";

    let abr2 = document.getElementById("img_aberta2");
    abr2.style.display ="none";

    telaIni.style.display = "block";
    
}
function papel3(){

    let telaIni = document.getElementById("tela_inicial");
    telaIni.style.backgroundImage = 'URL(imgs/albums/foto3.jpg)';
    telaIni.style.backgroundSize = "365px";

    let abr3 = document.getElementById("img_aberta3");
    abr3.style.display ="none";

    telaIni.style.display = "block";
    
}
function papel4(){

    let telaIni = document.getElementById("tela_inicial");
    telaIni.style.backgroundImage = 'URL(imgs/albums/foto4.jpg)';
    telaIni.style.backgroundSize = "365px";

    let abr4 = document.getElementById("img_aberta4");
    abr4.style.display ="none";

    telaIni.style.display = "block";
    
    
}
function papel5(){

    let telaIni = document.getElementById("tela_inicial");
    telaIni.style.backgroundImage = 'URL(imgs/albums/foto5.jpg)';
    telaIni.style.backgroundSize = "365px";   
    
    let abr5 = document.getElementById("img_aberta5");
    abr5.style.display ="none";

    telaIni.style.display = "block";
}
function papel6(){

    let telaIni = document.getElementById("tela_inicial");
    telaIni.style.backgroundImage = 'URL(imgs/albums/foto6.jpg)';
    telaIni.style.backgroundSize = "365px";

    let abr6 = document.getElementById("img_aberta6");
    abr6.style.display ="none";

    telaIni.style.display = "block";
}
function papel7(){

    let telaIni = document.getElementById("tela_inicial");
    telaIni.style.backgroundImage = 'URL(imgs/albums/foto7.jpg)';
    telaIni.style.backgroundSize = "365px";

    let abr7 = document.getElementById("img_aberta7");
    abr7.style.display ="none";

    telaIni.style.display = "block";
}
function papel8(){

    let telaIni = document.getElementById("tela_inicial");
    telaIni.style.backgroundImage = 'URL(imgs/albums/foto8.webp)';
    telaIni.style.backgroundSize = "365px";

    let abr8 = document.getElementById("img_aberta8");
    abr8.style.display ="none";

    telaIni.style.display = "block";
    
}
function papel9(){

    let telaIni = document.getElementById("tela_inicial");
    telaIni.style.backgroundImage = 'URL(imgs/albums/foto9.jpg)';
    telaIni.style.backgroundSize = "365px";

    let abr9 = document.getElementById("img_aberta9");
    abr9.style.display ="none";

    telaIni.style.display = "block";
    
}


function apagarFOTO1(){

    var bFOTO1 = document.getElementById("btft1");
    bFOTO1.style.display = "none";

    let abr1 = document.getElementById("img_aberta1");
    abr1.style.display ="none";

    let tela_galeria = document.getElementById("tela_Galeria");
    tela_galeria.style.display = "block";

}

function apagarFOTO2(){

    var bFOTO2 = document.getElementById("btft2");
    bFOTO2.style.display = "none";

    let abr2 = document.getElementById("img_aberta2");
    abr2.style.display ="none";

    let tela_galeria = document.getElementById("tela_Galeria");
    tela_galeria.style.display = "block";

}

function apagarFOTO3(){

    var bFOTO3 = document.getElementById("btft3");
    bFOTO3.style.display = "none";

    let abr3 = document.getElementById("img_aberta3");
    abr3.style.display ="none";

    let tela_galeria = document.getElementById("tela_Galeria");
    tela_galeria.style.display = "block";


}

function apagarFOTO4(){

    var bFOTO4= document.getElementById("btft4");
    bFOTO4.style.display = "none";

    let abr4 = document.getElementById("img_aberta4");
    abr4.style.display ="none";

    let tela_galeria = document.getElementById("tela_Galeria");
    tela_galeria.style.display = "block";


}

function apagarFOTO5(){

    var bFOTO5 = document.getElementById("btft5");
    bFOTO5.style.display = "none";

    let abr5 = document.getElementById("img_aberta5");
    abr5.style.display ="none";

    let tela_galeria = document.getElementById("tela_Galeria");
    tela_galeria.style.display = "block";


}

function apagarFOTO6(){

    var bFOTO6 = document.getElementById("btft6");
    bFOTO6.style.display = "none";

    let abr6 = document.getElementById("img_aberta6");
    abr6.style.display ="none";

    let tela_galeria = document.getElementById("tela_Galeria");
    tela_galeria.style.display = "block";


}

function apagarFOTO7(){

    var bFOTO7 = document.getElementById("btft7");
    bFOTO7.style.display = "none";

    let abr7 = document.getElementById("img_aberta7");
    abr7.style.display ="none";

    let tela_galeria = document.getElementById("tela_Galeria");
    tela_galeria.style.display = "block";


}

function apagarFOTO8(){

    var bFOTO8 = document.getElementById("btft8");
    bFOTO8.style.display = "none";

    let abr8 = document.getElementById("img_aberta8");
    abr8.style.display ="none";

    let tela_galeria = document.getElementById("tela_Galeria");
    tela_galeria.style.display = "block";


}

function apagarFOTO9(){

    var bFOTO9 = document.getElementById("btft9");
    bFOTO9.style.display = "none";

    let abr9 = document.getElementById("img_aberta9");
    abr9.style.display ="none";

    let tela_galeria = document.getElementById("tela_Galeria");
    tela_galeria.style.display = "block";


}



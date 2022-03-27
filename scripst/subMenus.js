/* SUMENUS DA TELA DE CONFIGURAÇOES, TELA, TELA DE SEGURANÇA, TELA DE BLOQUEIO,TELA DE BLOQUEIAR */



var bt01 = document.getElementById("bt_subTela");
var bt02 = document.getElementById("bt_subTela_segu");
var bt03 = document.getElementById("bt_subTela_bloqueio");
var bt04 = document.getElementById("bt_bloqueiarTela");

bt01.addEventListener("click",Sub_tela);
bt02.addEventListener("click",SubTela_segurança);
bt03.addEventListener("click",SubTela_bloqueio);
bt04.addEventListener("click",bloqueiar_celular);

function Sub_tela(){

    let subTela = document.getElementById("tela");
    subTela.style.display = "block";

    let telaconfigPrincipal = document.getElementById("abrir_tela_Configuracoes");
    telaconfigPrincipal.style.display = "none";


}



function SubTela_segurança(){

    let subTelaSegu = document.getElementById("tela_segurança");
    subTelaSegu.style.display ="block";

    let telaconfigPrincipal = document.getElementById("abrir_tela_Configuracoes");
    telaconfigPrincipal.style.display = "none";

}


function SubTela_bloqueio(){


    let subTelabloque = document.getElementById("tela_bloqueio2");
    subTelabloque.style.display = "block";

    let telaconfigPrincipal = document.getElementById("abrir_tela_Configuracoes");
    telaconfigPrincipal.style.display = "none";

}

function bloqueiar_celular(){

    let telaBloque = document.getElementById("tela_bloqueio");
    telaBloque.style.display = "block";

    let telaconfigPrincipal = document.getElementById("abrir_tela_Configuracoes");
    telaconfigPrincipal.style.display = "none";

    var senha1 = document.getElementById("senha2");
    senha1.innerText = "";

}


var cir8 = document.getElementById("circulo8");
var cir9 = document.getElementById("circulo9");
var cir10 = document.getElementById("circulo10");

var ret8 = document.getElementById("retangulo8");
var ret9 = document.getElementById("retangulo9");
var ret10 = document.getElementById("retangulo10");


cir8.addEventListener("click",voltar_Tela_inicial);
cir9.addEventListener("click",voltar_Tela_inicial);
cir10.addEventListener("click",voltar_Tela_inicial);

ret8.addEventListener("click",voltar_Tela_configuraçoes);
ret9.addEventListener("click",voltar_Tela_configuraçoes);
ret10.addEventListener("click",voltar_Tela_configuraçoes);

function voltar_Tela_configuraçoes(){

    let telaconfigPrincipal = document.getElementById("abrir_tela_Configuracoes");
    telaconfigPrincipal.style.display = "block";


    let subTela = document.getElementById("tela");
    subTela.style.display = "none";

    let subTelaSegu = document.getElementById("tela_segurança");
    subTelaSegu.style.display ="none";

    let subTelabloque = document.getElementById("tela_bloqueio2");
    subTelabloque.style.display = "none";
}

function voltar_Tela_inicial(){

    let telaIni = document.getElementById("tela_inicial");
    telaIni.style.display = "block";


    let subTela = document.getElementById("tela");
    subTela.style.display = "none";

    let subTelaSegu = document.getElementById("tela_segurança");
    subTelaSegu.style.display ="none";

    let subTelabloque = document.getElementById("tela_bloqueio2");
    subTelabloque.style.display = "none";
}


/* variaveis da tela */

/* aumentar tamanho dos icones */

var bt_padraT = document.getElementById("bt_padrao_tela");
var bt_medioT = document.getElementById("bt_medio_tela");
var bt_grandeT = document.getElementById("bt_grande_tela");

bt_padraT.addEventListener("click",iconesPadroa);
bt_medioT.addEventListener("click",iconesMedio);
bt_grandeT.addEventListener("click",iconesGrande);

function iconesPadroa(){


    let padrao1 = document.getElementById("bt_config");
    let padrao2 = document.getElementById("bt_fone");
    let padrao3 = document.getElementById("bt_googleMp");
    let padrao4 = document.getElementById("bt_galeria");
    let padrao5 = document.getElementById("bt_music");
    let padrao6 = document.getElementById("bt_calcula");
    let padrao7 = document.getElementById("bt_anota");
    let padrao8 = document.getElementById("bt_videoG");

    padrao1.style.width = "45px";
    padrao2.style.width = "45px";
    padrao3.style.width = "45px";
    padrao4.style.width = "45px";
    padrao5.style.width = "45px";
    padrao6.style.width = "45px";
    padrao7.style.width = "45px";
    padrao8.style.width = "45px"



}

function iconesMedio(){

    let medio1 = document.getElementById("bt_config");
    let medio2 = document.getElementById("bt_fone");
    let medio3 = document.getElementById("bt_googleMp");
    let medio4 = document.getElementById("bt_galeria");
    let medio5 = document.getElementById("bt_music");
    let medio6 = document.getElementById("bt_calcula");
    let medio7 = document.getElementById("bt_anota");
    let medio8 = document.getElementById("bt_videoG");

    medio1.style.width = "51px";
    medio2.style.width = "51px";
    medio3.style.width = "51px";
    medio4.style.width = "51px";
    medio5.style.width = "51px";
    medio6.style.width = "51px";
    medio7.style.width = "51px";
    medio8.style.width = "51px"

}

function iconesGrande(){

    let grande1 = document.getElementById("bt_config");
    let grande2 = document.getElementById("bt_fone");
    let grande3 = document.getElementById("bt_googleMp");
    let grande4 = document.getElementById("bt_galeria");
    let grande5 = document.getElementById("bt_music");
    let grande6 = document.getElementById("bt_calcula");
    let grande7 = document.getElementById("bt_anota");
    let grande8 = document.getElementById("bt_videoG");

    grande1.style.width = "57px";
    grande2.style.width = "57px";
    grande3.style.width = "57px";
    grande4.style.width = "57px";
    grande5.style.width = "57px";
    grande6.style.width = "57px";
    grande7.style.width = "57px";
    grande8.style.width = "57px"

}

/* aplicar tema na tela inicial */

var tema01 = document.getElementById("tema1");
var tema02 = document.getElementById("tema2");

tema01.addEventListener("click",aplicarTema01);
tema02.addEventListener("click",aplicarTema02);



function aplicarTema01(){

    let telaIni = document.getElementById("tela_inicial");
    telaIni.style.backgroundImage = 'linear-gradient(120deg, rgb(2, 2, 2),rgb(255, 49, 221),rgb(201, 189, 21))';

}

function aplicarTema02(){

    let telaIni = document.getElementById("tela_inicial");
    telaIni.style.backgroundImage = ` linear-gradient(120deg, rgb(5, 4, 4),rgb(128, 170, 49),rgb(212, 142, 13))`;

}
/* ------------------------------------------------------*/



/* aumentar tamanho da fonte */
var btFP = document.getElementById("bt_fontePadrao");
var btFM = document.getElementById("bt_fonteMedio");
var btFG = document.getElementById("bt_fonteGrande");

btFP.addEventListener("click",fonteP);
btFM.addEventListener("click",fonteM);
btFG.addEventListener("click",fonteG);

function fonteP(){

    let hd = document.getElementById("PH");
    hd.style.fontSize = "4em";

}

function fonteM(){

    let hd = document.getElementById("PH");
    hd.style.fontSize = "4.7em";


}

function fonteG(){

    let hd = document.getElementById("PH");
    hd.style.fontSize = "6em";

}
/* ---------------------------------------------- */



/* APLICAR TEMA TELA DE BLOQUEIO */

var tema03 = document.getElementById("tema3");
var tema04 = document.getElementById("tema4");

tema03.addEventListener("click",aplicarTema03);
tema04.addEventListener("click",aplicarTema04);


function aplicarTema03(){

    let telaBloque = document.getElementById("tela_bloqueio");
    telaBloque.style.backgroundImage = ` linear-gradient(120deg, rgb(27, 82, 90),rgb(128, 170, 49),rgb(212, 142, 13))`;

}

function aplicarTema04(){

    let telaBloque = document.getElementById("tela_bloqueio");
    telaBloque.style.backgroundImage = `linear-gradient(120deg, rgb(145, 179, 22),rgb(28, 34, 17),rgb(189, 13, 212))`;
    
}


/* SALVAR NUMERO DE TELEFONE*/

var inputNome = document.getElementById("textNome");
var inputNumero = document.getElementById("textNumero");
var salvar = document.getElementById("salvar");
var addText = document.getElementById("receberCTTs");


salvar.addEventListener("click",addContatos);

function addContatos(){

    if(inputNome.value <=0 && inputNumero.value <=0){

        addText.innerHTML = "";
      
    }else{

        addText.innerHTML += `<li> ${inputNome.value + " : " + inputNumero.value} </li>`;
        
    }

    inputNome.value = "";
    inputNumero.value = "";

}

/* tela galeria adcionar papeis de parade na tela inicial e ecluiar imagens da galeria */

var bFOTO1 = document.getElementById("btft1");
var bFOTO2 = document.getElementById("btft2");
var bFOTO3 = document.getElementById("btft3");
var bFOTO4 = document.getElementById("btft4");
var bFOTO5 = document.getElementById("btft5");
var btFOTO6 = document.getElementById("btft6");
var btFOTO7 = document.getElementById("btft7");
var bFOTO8 = document.getElementById("btft8");
var bFOTO9 = document.getElementById("btft9");
var voltar1 = document.getElementById("voltar_tela_galeria1");
var voltar2 = document.getElementById("voltar_tela_galeria2");
var voltar3 = document.getElementById("voltar_tela_galeria3");
var voltar4 = document.getElementById("voltar_tela_galeria4");
var voltar5 = document.getElementById("voltar_tela_galeria5");
var voltar6 = document.getElementById("voltar_tela_galeria6");
var voltar7 = document.getElementById("voltar_tela_galeria7");
var voltar8 = document.getElementById("voltar_tela_galeria8");
var voltar9 = document.getElementById("voltar_tela_galeria9");


bFOTO1.addEventListener("click",abrir_img1);
bFOTO2.addEventListener("click",abrir_img2);
bFOTO3.addEventListener("click",abrir_img3);
bFOTO4.addEventListener("click",abrir_img4);
bFOTO5.addEventListener("click",abrir_img5);
btFOTO6.addEventListener("click",abrir_img6);
btFOTO7.addEventListener("click",abrir_img7);
bFOTO8.addEventListener("click",abrir_img8);
bFOTO9.addEventListener("click",abrir_img9);
voltar1.addEventListener("click",voltarTelaGaleria);
voltar2.addEventListener("click",voltarTelaGaleria);
voltar3.addEventListener("click",voltarTelaGaleria);
voltar4.addEventListener("click",voltarTelaGaleria);
voltar5.addEventListener("click",voltarTelaGaleria);
voltar6.addEventListener("click",voltarTelaGaleria);
voltar7.addEventListener("click",voltarTelaGaleria);
voltar8.addEventListener("click",voltarTelaGaleria);
voltar9.addEventListener("click",voltarTelaGaleria);


function abrir_img1(){

    let tela_galeria = document.getElementById("tela_Galeria");
    tela_galeria.style.display = "none";

    let abr1 = document.getElementById("img_aberta1");
    abr1.style.display ="block";

}

function abrir_img2(){

    let tela_galeria = document.getElementById("tela_Galeria");
    tela_galeria.style.display = "none";

    let abr2 = document.getElementById("img_aberta2");
    abr2.style.display = "block";

}

function abrir_img3(){

    let tela_galeria = document.getElementById("tela_Galeria");
    tela_galeria.style.display = "none";

    let abr3 = document.getElementById("img_aberta3");
    abr3.style.display = "block";

}

function abrir_img4(){

    let tela_galeria = document.getElementById("tela_Galeria");
    tela_galeria.style.display = "none";

    let abr4 = document.getElementById("img_aberta4");
    abr4.style.display = "block";
}

function abrir_img5(){

    let tela_galeria = document.getElementById("tela_Galeria");
    tela_galeria.style.display = "none";

    let abr5 = document.getElementById("img_aberta5");
    abr5.style.display = "block";

}

function abrir_img6(){

    let tela_galeria = document.getElementById("tela_Galeria");
    tela_galeria.style.display = "none";

    let abr6 = document.getElementById("img_aberta6");
    abr6.style.display = "block";

}

function abrir_img7(){
    let tela_galeria = document.getElementById("tela_Galeria");
    tela_galeria.style.display = "none";

    let abr7 = document.getElementById("img_aberta7");
    abr7.style.display ="block";

}

function abrir_img8(){
    let tela_galeria = document.getElementById("tela_Galeria");
    tela_galeria.style.display = "none";

    let abr8 = document.getElementById("img_aberta8");
    abr8.style.display = "block";

}

function abrir_img9(){

    let tela_galeria = document.getElementById("tela_Galeria");
    tela_galeria.style.display = "none";

    let abr9 = document.getElementById("img_aberta9");
    abr9.style.display = "block";

}

function voltarTelaGaleria(){

    let tela_galeria = document.getElementById("tela_Galeria");
    tela_galeria.style.display = "block";

    let abr1 = document.getElementById("img_aberta1");
    abr1.style.display ="none";

    let abr2 = document.getElementById("img_aberta2");
    abr2.style.display = "none";

    let abr3 = document.getElementById("img_aberta3");
    abr3.style.display = "none";

    let abr4 = document.getElementById("img_aberta4");
    abr4.style.display = "none";

    let abr5 = document.getElementById("img_aberta5");
    abr5.style.display = "none";

    let abr6 = document.getElementById("img_aberta6");
    abr6.style.display = "none";

    let abr7 = document.getElementById("img_aberta7");
    abr7.style.display ="none";

    let abr8 = document.getElementById("img_aberta8");
    abr8.style.display = "none";

    let abr9 = document.getElementById("img_aberta9");
    abr9.style.display = "none";

}

onload = function showTime(){

    var data = new Date();
    var hr = data.getHours();
    var min = data.getMinutes();
    var tempo_total = hr + ":" + min;
    var tempo = window.document.getElementById("PH");
    tempo.innerHTML = tempo_total;

    setInterval(showTime,1000);
}
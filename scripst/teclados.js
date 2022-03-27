var senha2 =  document.getElementById("textTeclado");
var erro = document.getElementById("erro");



function verificador1(){

    if(senha2.innerText==0){

        textTeclado.style.border = "1px solid red";
        erro.innerText = "Por favor cadastre uma senha";
       
        
    }else{

        telaLOADING();
    }

    
}

function telaLOADING(){

    let telload = document.getElementById("tela_LOAD");
    telload.style.display = "block";

    let telaconfig = document.getElementById("tela_config");
    telaconfig.style.display = "none";

    setTimeout(()=>{

        tela_de_bloqueio();


    },5000)
}


function tela_de_bloqueio(){


    let telaBloque = document.getElementById("tela_bloqueio");
    telaBloque.style.display = "block";

    let telaconfig = document.getElementById("tela_config");
    telaconfig.style.display = "none";

    let telload = document.getElementById("tela_LOAD");
    telload.style.display = "none";
}

/* Inseririndo letras e numeros aos inputs- parte 1 */
function inserir(num){

    let numero = document.getElementById("textTeclado").innerHTML;
    document.getElementById("textTeclado").innerHTML = numero + num;
}

function inserir2(letras){

    let le = document.getElementById("textTeclado").innerHTML;
    document.getElementById("textTeclado").innerHTML = le + letras;
}

function apagar(){

    var text =  document.getElementById("textTeclado").innerHTML;
    document.getElementById("textTeclado").innerHTML = text.substring(0,text.length -1);
}

/* Inseririndo letras e numeros aos inputs- parte 2 */


function inserir3(nume){

    let numero2 = document.getElementById("senha2").innerHTML;
    document.getElementById("senha2").innerHTML = numero2 + nume;

}

function inserirr(letter){

    let le2 = document.getElementById("senha2").innerHTML;
    document.getElementById("senha2").innerHTML = le2 + letter;
}

function apagarr(){

    var text2 = document.getElementById("senha2").innerHTML;
    document.getElementById("senha2").innerHTML = text2.substring(0,text2.length -1);
}


/* troca de teclados parte 1 */
function chamarTecladoLetras(){

    let teclado1 = document.getElementById("teclado1");
        teclado1.style.display = "none"
    
    let teclado2 = document.getElementById("teclado2");
        teclado2.style.display = "block";
}
    

function chamarTecladoNumero(){
    
    let teclado1 = document.getElementById("teclado1");
        teclado1.style.display = "block"
    
    let teclado2 = document.getElementById("teclado2");
        teclado2.style.display = "none";
}

function chamarTecladoN(){

    let teclado3 = document.getElementById("teclado3");
    teclado3.style.display = "block";

    let teclado4 = document.getElementById("teclado4");
    teclado4.style.display = "none";

}

function chamarTecladoL(){

    let teclado3 = document.getElementById("teclado3");
    teclado3.style.display = "none";

    let teclado4 = document.getElementById("teclado4");
    teclado4.style.display = "block";
}

    


function inserirC(num){

    var numero = document.getElementById("texto").innerHTML;
    document.getElementById("texto").innerHTML = numero + num;

}

function limpar(){

    let texto = document.getElementById("texto");
    texto.innerHTML = "";
}

function back(){

    let texto = document.getElementById("texto").innerHTML;
    document.getElementById("texto").innerHTML = texto.substring(0,texto.length -1);

}

function calcular(){

    let texto = document.getElementById("texto").innerHTML;

    if(texto){

        document.getElementById("texto").innerHTML = eval(texto);
    }else{

        let texto = document.getElementById("texto").innerHTML = "Nada para calcular";

    }

}
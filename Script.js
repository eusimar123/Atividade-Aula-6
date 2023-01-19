var saida = document.getElementById("saida");
var imprimir = "";

var ano = ["Janeiro", 
"Fevereiro",
"Março",
"Abril", 
"Maio", 
"Junho", 
"Julho",
"Agosto",
"Setembro",
"Outubro",
"Novembro",
"Dezembro"];

for(var i = 0; i < ano.length; i++){
    imprimir += ano[i] + "<br>"; 
}

saida.innerHTML = imprimir;
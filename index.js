"use strict";

/* TODO */
const categoria1 = 1000;
const categoria2 = 1500;
const categoria3 = 2000;
const subcategoriaA = 1.5;
const subcategoriaB = 2;
const subcategoriaC = 2.5;


var categoriaIngresada = parseInt(prompt ('Ingrese su categoaria (1: u$s 1000, 2: u$s 1500, 3: u$s 2000):'));
while(categoriaIngresada != 1 && categoriaIngresada != 2 && categoriaIngresada != 3){
    alert ("Categoría invalida, intentelo de nuevo")
    categoriaIngresada = parseInt(prompt ('Ingrese su categoaria (1: u$s 1000, 2: u$s 1500, 3: u$s 2000):'));
}
var subcategoriaIngresada = prompt ('Ingrese su subcategoaria (A: x1.5, B: x2, C: x2.5):').toUpperCase();
while(subcategoriaIngresada != "A" && subcategoriaIngresada != "B" && subcategoriaIngresada != "C"){
    alert ("Subcategoría invalida, intentelo de nuevo")
    subcategoriaIngresada = prompt ('Ingrese su subcategoaria (A: x1.5, B: x2, C: x2.5):').toUpperCase();
}

if (categoriaIngresada == 1){
    categoriaIngresada = categoria1;
}else if(categoriaIngresada == 2){
    categoriaIngresada = categoria2;
}else{
    categoriaIngresada = categoria3;
}
if (subcategoriaIngresada == "A"){
    subcategoriaIngresada = subcategoriaA;
}else if(subcategoriaIngresada == "B"){
    subcategoriaIngresada = subcategoriaB;
}else{
    subcategoriaIngresada = subcategoriaC;
}

if(categoriaIngresada*subcategoriaIngresada >= 1500 || categoriaIngresada*subcategoriaIngresada <=3000){
    alert(`Tu rango es inicial \nTu sueldo es de $ ${categoriaIngresada*subcategoriaIngresada}.- \b`);
}else if(categoriaIngresada*subcategoriaIngresada > 3000 || categoriaIngresada*subcategoriaIngresada <=4000){
    alert(`Tu rango es intermedio \nTu sueldo es de $ ${categoriaIngresada*subcategoriaIngresada}.- \b`);
}else{
    alert(`Tu rango es intermedio \nTu sueldo es de $ ${categoriaIngresada*subcategoriaIngresada}.- \b`);
}
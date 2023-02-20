//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//valor de los recargos
var edad_18 = 0.1;// 10%
var edad_25 = 0.2;// 20%
var edad_50 = 0.3;// 30%

var casado_18 = 0.1;// 10%
var casado_25 = 0.2;// 20%
var casado_50 = 0.3;// 30%

var hijos_recargo = 0.2;// 20%
 
//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0

//Mensajes de alerta para inicio de cotización
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números")
if(edad < 18){
  alert ("Seguros TK-U disponible solo para mayores de edad (+18)")
  exit(edad < 18)
}

console.log(nombre)
console.log(edad)

var casado = prompt("¿Está casado actualmente?")
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
}


console.log(casado)
console.log(edad_conyuge)

var hijos = prompt("¿Tiene hijos o hijas?")
//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos
if("SI" == hijos.toUpperCase()) {
  cantidad_hijos = prompt("¿cuantos hijos tiene?")
}


console.log(hijos)
console.log(cantidad_hijos)

//Calculo total basado en respuestas del usuario
if(edad >=18 && edad < 25){
  recargo = precio_base * edad_18
  recargo_total = recargo_total + recargo
}
else if(edad >=25 && edad < 50){
  recargo = precio_base * edad_25
  recargo_total = recargo_total + recargo
}
else if(edad >=50) {
  recargo = precio_base * edad_50
  recargo_total = recargo_total + recargo
}
/** 
 * 2. Recargo por la edad del conyuge
 */
if (edad_conyuge >=18 && edad_conyuge < 25){
  recargo = precio_base * casado_18
  recargo_total = recargo_total + recargo
}
else if(edad_conyuge >=25 && edad_conyuge <50){
  recargo = precio_base * casado_25
  recargo_total = recargo_total + recargo
}
else if(edad_conyuge >=50){
  recargo = precio_base * casado_50
  recargo_total = recargo_total + recargo
}
/**
 * 3. Recargo por la cantidad de hijos 
 */ if (hijos){
  recargo = precio_base * cantidad_hijos * hijos_recargo
  recargo_total = recargo_total + recargo
 }

console.log(recargo_total)

precio_final = precio_base + recargo_total
//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)
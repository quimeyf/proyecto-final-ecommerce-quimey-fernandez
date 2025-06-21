// console.log("hola mundo");
/*
let numeroA = parseInt(prompt("Ingrese un número: "));
let numeroB = parseInt(prompt("Ingrese un número: "));
let resultado = numeroA - numeroB;
console.log(resultado);
if (resultado > 2){
    console.log("El resultado es mayor a 2");
} else {
    console.log("El resultado es menor a 2");
}
let resulado2 = numeroA * numeroB;
console.log(resulado2);
*/

/*
// Solicitar datos al usuario
let nombre = prompt("Por favor, ingresa tu nombre:");
let edadInput = prompt("Hola " + nombre + ", ingresa tu edad:");

let edad = parseInt(edadInput);

//Validar si es un número
if (isNaN(edad)) {
    console.log("Error: '" + edadInput + "' no es un número de edad válido.");
} else if(edad >= 18){
    console.log("Eres mayor de edad.");
} else if (edad < 18 && edad > 14){
    console.log("Eres adolescente");
} else {
    console.log("Eres un infante.")
}
*/

/*
// Pedir edad, si esta en lista VIP
let edad = parseInt(prompt("Ingrese su edad: "))
let miembroVIP = confirm("¿Sos miembro VIP?: ")
if (edad >= 18 && miembroVIP) {
    console.log("Acceso concedido al área VIP.")
} else if (edad >= 18 && !miembroVIP) {
    console.log("Acceso concedido al sector general")
} else {
    console.log("Acceso denegado.")
}
*/

// Lista de productos
let productos = [
 { nombre: 'Laptop', descuento: true, precio: 1200},
 { nombre: 'Celular', descuento: false, precio: 1700 },
 { nombre: 'Tablet', descuento: true, precio: 3000 },
 { nombre: 'Auriculares', descuento: true, precio: 4000}
];

 for (let i = 0; i < productos.length; i++) {
 let producto = productos[i];
 if (producto.descuento === true){
    console.log(`${producto.nombre}: $${producto.precio} (en descuento)`);
 }
 if (!producto.descuento){
    console.log(`${producto.nombre} no está en promoción.`)
 }
}
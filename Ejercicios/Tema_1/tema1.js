//Control atracción de feria
"use strict";
let nombre = prompt("Por favor, introduzca su nombre: ");
let edad = prompt("Por favor, introduzca su edad: ");
let vip = confirm("¿Tiene entrada VIP?");

if (nombre === null || nombre === '') {
    console.log("[Error]: el nombre es obligatorio");
}

if (nombre.toLowerCase() === 'admin') {
    console.log("Acceso de administración concedido");
}

const edadNumero = Number(edad);
if (isNaN(edadNumero) || edadNumero < 0 || edadNumero > 120) {
    console.log("[Error]: edad no válida");

}

if (vip) {
    console.log(nombre + ", eres VIP, puedes entrar siempre.");
} else {
    if (edadNumero < 12) {
        console.log(nombre + ", no puedes entrar sin un adulto");

    } else if (edadNumero >= 12 || edadNumero <= 17) {
        console.log(nombre + ", puedes entrar con supervisión");

    } else if (edadNumero > 17) {
        console.log(nombre + ", puedes entrar. ¡Disfruta!");
    }
}
// =======================================================
// TEMA 1 – SINTAXIS ESENCIAL (CHULETA PARA GITHUB)
// =======================================================

"use strict";
// Actívalo SIEMPRE al principio de cada .js
// - No deja usar variables sin declarar.
// - Evita cosas raras con this y con parámetros duplicados.

// -------------------------------------------------------
// 1. ÁMBITO Y VARIABLES (let / const / var)
// -------------------------------------------------------

// Regla práctica:
// - const: valor que NO vas a reasignar (config, selectores DOM, etc.)
// - let: valor que puede cambiar (contadores, acumuladores, etc.)
// - var: NO usar salvo que el ejercicio lo pida (scope de función + hoisting).

function ejemploScope() {
    if (true) {
        var conVar = "visible en toda la función";   // MAL hábito
        let conLet = "visible solo dentro del if";   // BIEN
    }
    console.log(conVar); // OK
    // console.log(conLet); // ERROR (ReferenceError)
}

// -------------------------------------------------------
// 2. COMPARACIONES Y COERCIÓN
// -------------------------------------------------------

// SIEMPRE usar === y !== (comparación estricta)
const edad = 18;

if (edad === 18) {
    // ...
}

// Evitar == salvo que se quiera coerción (casi nunca en examen)
// Ejemplos de valores "falsy" (se convierten a false en condicionales):
// false, 0, -0, 0n, "", null, undefined, NaN

// Ejemplo típico de trampa:
const nombre = "";
if (!nombre) {
    // entra aquí porque "" es falsy
}

// -------------------------------------------------------
// 3. OPERADOR TERNARIO Y CORTOCIRCUITO
// -------------------------------------------------------

const esMayor = edad >= 18 ? "mayor de edad" : "menor de edad";
// if/else en una sola línea.

// Cortocircuito con && y ||
// - expr1 && expr2 => si expr1 es falsy, devuelve expr1; si no, expr2
// - expr1 || expr2 => si expr1 es truthy, devuelve expr1; si no, expr2
const usuario = null;
const nombreAMostrar = usuario || "Invitado"; // típico “valor por defecto”

// Nullish coalescing (solo null/undefined):
const valor = 0;
const valorSeguro = valor ?? 10;
// 0 ?? 10 => 0 (con || habría salido 10)

// -------------------------------------------------------
// 4. CADENAS Y TEMPLATE LITERALS
// -------------------------------------------------------

const producto = "Ratón";
const precio = 29.99;

// Mucho más legible que concatenar con +
const mensaje = `Producto: ${producto}, precio: ${precio.toFixed(2)} €`;

// Métodos de String muy usados:
// - length, toUpperCase(), toLowerCase(), trim()
// - includes(), indexOf(), slice(), split(), replace()

// -------------------------------------------------------
// 5. ESTRUCTURAS DE CONTROL BÁSICAS
// -------------------------------------------------------

// if / else if / else
function clasificarNota(nota) {
    if (nota >= 9) {
        return "Sobresaliente";
    } else if (nota >= 7) {
        return "Notable";
    } else if (nota >= 5) {
        return "Aprobado";
    } else {
        return "Suspenso";
    }
}

// switch (cuidado con los break)
function diaLaboral(numeroDia) {
    switch (numeroDia) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Laboral";
        case 6:
        case 7:
            return "Fin de semana";
        default:
            return "Día no válido";
    }
}

// -------------------------------------------------------
// 6. BUCLES (for, while, for...of)
// -------------------------------------------------------

const numeros = [10, 20, 30, 40];

// for clásico (tienes índice)
for (let i = 0; i < numeros.length; i++) {
    const valor = numeros[i];
    // ...
}

// while (cuando no sabes cuántas iteraciones habrá)
let i = 0;
while (i < numeros.length) {
    // ...
    i++;
}

// for...of (para recorrer valores de iterable: arrays, strings, etc.)
for (const n of numeros) {
    // n es el valor directamente
}

// OJO: for...in está pensado para recorrer propiedades de objetos, 
// no arrays (da los índices como strings).

// -------------------------------------------------------
// 7. FUNCIONES (declaración, expresión, arrow)
// -------------------------------------------------------

// Declaración (hoisting: se puede usar antes de su definición)
function sumar(a, b) {
    return a + b;
}

// Expresión (NO tiene hoisting)
const restar = function (a, b) {
    return a - b;
};

// Arrow (ideal como callback)
const multiplicar = (a, b) => a * b;

// Parámetros por defecto
const saludar = (nombre = "invitado") => {
    console.log(`Hola, ${nombre}`);
};

// Buen patrón en examen: validar y “salir pronto”
function esNumeroPositivo(n) {
    if (typeof n !== "number" || Number.isNaN(n)) {
        return false;
    }
    return n > 0;
}

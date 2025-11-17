// =======================================================
// TEMA 2: FUNCIONES, ARRAYS, OBJETOS, JSON, SPREAD, ETC.
// =======================================================
"use strict";

// Función declaración (tiene hoisting)
function sumar(a, b = 0) {
    return a + b;
}

// Función expresión (sin hoisting)
const restar = function (a, b = 0) {
    return a - b;
};

// Arrow function (ideal como callback)
const multiplicar = (a, b) => a * b;

// Función que recibe otra función (callback)
function operar(a, b, fnOperacion) {
    return fnOperacion(a, b);
}
const resultadoSuma = operar(2, 3, sumar);

// -------------------------
// ARGUMENTS vs PARÁMETROS
// -------------------------

function sumarTodo() {
    let total = 0;
    // arguments es un pseudo-array
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
// sumarTodo(1,2,3,4) -> 10

// -------------------------
// ARRAYS Y MÉTODOS ÚTILES
// -------------------------

const numeros = [1, 2, 3, 4, 5];

// forEach: recorre sin devolver
numeros.forEach((valor, indice) => {
    // console.log(indice, valor);
});

// map: genera un nuevo array
const dobles = numeros.map((n) => n * 2);

// filter: se queda con los que cumplan la condición
const mayoresQueTres = numeros.filter((n) => n > 3);

// reduce: acumula en un único valor
const sumaTotal = numeros.reduce((ac, n) => ac + n, 0);

// some / every
const hayPares = numeros.some((n) => n % 2 === 0);
const todosMayoresQueCero = numeros.every((n) => n > 0);

// -------------------------
// OBJETOS LITERALES Y JSON
// -------------------------

const persona = {
    nombre: "Ada",
    edad: 36,
    direccion: {
        ciudad: "Londres",
        cp: "E1"
    },
    getNombreCompleto() {
        return `${this.nombre} (edad ${this.edad})`;
    }
};

// Acceso
const ciudad = persona.direccion.ciudad;
const ciudad2 = persona["direccion"]["ciudad"];

// Optional chaining
const cp = persona.direccion?.cp;

// Conversión a texto JSON (para guardar/enviar)
const personaJSON = JSON.stringify(persona);

// De texto JSON a objeto JS (p.e. respuesta de un servidor)
const personaClonada = JSON.parse(personaJSON);

// -------------------------
// SPREAD Y DESESTRUCTURACIÓN
// -------------------------

// Spread con arrays (clonar + añadir)
const masNumeros = [...numeros, 6, 7];

// Spread con objetos
const personaExtendida = {
    ...persona,
    email: "ada@example.com"
};

// Desestructuración de objetos
const { nombre, edad } = persona;

// Desestructuración con cambio de nombre y valores por defecto
const {
    nombre: nombrePers,
    edad: edadPers,
    apodo = "sin apodo"
} = persona;

// Desestructuración de arrays
const frutas = ["manzana", "pera", "plátano", "kiwi"];
const [primeraFruta, segundaFruta, ...restoFrutas] = frutas;

// -------------------------
// OBJETOS PREDEFINIDOS ÚTILES
// -------------------------

// String
const texto = "Feo:De Verdad:654875214";
const trozos = texto.split(":");        // ["Feo","De Verdad","654875214"]
const telefono = trozos[2].replace("2", "9");

// Date
const ahora = new Date();
const manana = new Date(ahora.getTime() + 24 * 60 * 60 * 1000);

// Math
const aleatorio0a1 = Math.random();
const redondeado = Math.round(3.6);
const maximo = Math.max(10, 5, 80);

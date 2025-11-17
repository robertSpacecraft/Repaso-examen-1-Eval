// =======================================================
// TEMA 2 – FUNCIONES, ARRAYS, OBJETOS, CALLBACKS, FECHAS,
// STRING, MATH, SPREAD, DESTRUCTURING, JSON, TIMERS…
// =======================================================

"use strict";

// -------------------------------------------------------
// 1. TIPOS DE FUNCIONES
// -------------------------------------------------------

// Declaración (hoisting)
function sumar(a, b) {
    return a + b;
}

// Expresión (NO hoisting)
const restar = function (a, b) {
    return a - b;
};

// Arrow (comportamiento de this diferente, ideal callback)
const multiplicar = (a, b) => a * b;

// Parámetros por defecto
const saludar = (nombre = "anónimo") => `Hola ${nombre}`;

// Early return → patrón recomendado
const esPositivo = n => {
    if (typeof n !== "number" || Number.isNaN(n)) return false;
    return n > 0;
};

// -------------------------------------------------------
// 2. PSEUDOARRAY arguments
// -------------------------------------------------------

// Función que admite parámetros infinitos
function sumarTodo() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        const actual = arguments[i];
        if (typeof actual !== "number") {
            console.error("Solo números");
            return;
        }
        total += actual;
    }
    return total;
}

// -------------------------------------------------------
// 3. ARRAYS Y MÉTODOS IMPORTANTES
// -------------------------------------------------------

const nums = [10, 20, 30, 40];

// forEach → recorrer, no devuelve
nums.forEach((v, i) => {
    // ...
});

// map → genera nuevo array
const dobles = nums.map(n => n * 2);

// filter → filtra
const mayores = nums.filter(n => n > 15);

// reduce → acumula resultado
const suma = nums.reduce((acc, n) => acc + n, 0);

// find → primer elemento que cumpla
const encontrado = nums.find(n => n === 30);

// some/every
const hayPares = nums.some(n => n % 2 === 0);
const todosPositivos = nums.every(n => n > 0);

// sort → cuidado, ordena como strings si no se da función
const ordenados = nums.sort((a, b) => a - b);

// -------------------------------------------------------
// 4. SPREAD Y DESTRUCTURING
// -------------------------------------------------------

// Spread con arrays
const masNums = [...nums, 50, 60];

// Spread con objetos
const persona = { nombre: "Ada", edad: 34 };
const personaExtendida = { ...persona, ciudad: "Londres" };

// Desestructuración objeto
const { nombre, edad } = persona;

// Desestructuración array
const frutas = ["manzana", "pera", "kiwi"];
const [f1, f2, ...restoFrutas] = frutas;

// -------------------------------------------------------
// 5. OBJETOS LITERALES + MÉTODOS
// -------------------------------------------------------

const curso = {
    nombre: "JavaScript",
    anyo: 2024,
    descripcion: "Curso avanzado",
    alumnado: ["Ana", "Luis"],
    informe() {
        // this → referencia al objeto
        return `${this.nombre} (${this.anyo}) con ${this.alumnado.length} alumnos`;
    }
};

// Recorriendo propiedades
for (const clave in curso) {
    console.log(clave, curso[clave]);
}

// -------------------------------------------------------
// 6. OBJETOS PREDEFINIDOS
// -------------------------------------------------------

// STRING
const cadena = "Hola Feo De Verdad";
cadena.length;
cadena.toUpperCase();
cadena.toLowerCase();
cadena.includes("Feo");
cadena.split(" ");
cadena.replace("Feo", "Guapo");

// NUMBER / Math
Math.round(3.7);  // 4
Math.ceil(3.1);   // 4
Math.floor(3.9);  // 3
Math.max(1, 4, 2);
Math.min(1, 4, 2);
Math.random();    // 0-1

// DATE
const ahora = new Date();
ahora.getFullYear();
ahora.getMonth(); // 0-11
ahora.getDate();

// -------------------------------------------------------
// 7. JSON
// -------------------------------------------------------

const objeto = { nombre: "Ada", edad: 27 };
const json = JSON.stringify(objeto);
const clon = JSON.parse(json);

// -------------------------------------------------------
// 8. TEMPORIZADORES (super frecuentes)
//
// setTimeout(callback, ms)
// setInterval(callback, ms)
// clearTimeout(id)
// clearInterval(id)
// -------------------------------------------------------

const idIntervalo = setInterval(() => {
    console.log("tic");
}, 1000);

// Parar después de 3 s
setTimeout(() => clearInterval(idIntervalo), 3000);

// -------------------------------------------------------
// 9. RANDOM ENTRE DOS VALORES
// -------------------------------------------------------
function randomEntre(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// -------------------------------------------------------
// 10. VALIDACIONES BÁSICAS
// -------------------------------------------------------
const esNumero = x => typeof x === "number" && !Number.isNaN(x);

// Buen patrón: trim() siempre para cadenas del usuario
const limpiar = str => str.trim();


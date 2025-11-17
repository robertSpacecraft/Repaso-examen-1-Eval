/************************************************************
 * CHULETA ARRAYS – Métodos esenciales (map, filter, reduce…)
 ************************************************************/
//Fución aleatorio:
function numeroAleatorio1a10() {
    return Math.floor(Math.random() * 10) + 1;
}

/*-----------------------------------------------------------
  1. map()
-----------------------------------------------------------*/
// Aplica una función a cada elemento y devuelve un NUEVO array.
// Devuelve: Array NUEVO (misma longitud).
const nums = [1, 2, 3];
const dobles = nums.map((n) => n * 2);
// [2, 4, 6]

/*-----------------------------------------------------------
  2. filter()
-----------------------------------------------------------*/
// Filtra elementos según condición.
// Devuelve: Array NUEVO (puede ser más corto).
const mayores = nums.filter((n) => n > 1);
// [2, 3]

/*-----------------------------------------------------------
  3. reduce()
-----------------------------------------------------------*/
// Reduce todo el array a un único valor.
// Devuelve: cualquier tipo (número, string, objeto…).
const suma = nums.reduce((acum, n) => acum + n, 0);
// 6

/*-----------------------------------------------------------
  4. find()
-----------------------------------------------------------*/
// Busca el PRIMER elemento que cumple condición.
// Devuelve: elemento encontrado o undefined.
const primeroMayor = nums.find((n) => n > 1);
// 2

/*-----------------------------------------------------------
  5. findIndex()
-----------------------------------------------------------*/
// Igual que find, pero devuelve el índice.
// Devuelve: número o -1.
const pos = nums.findIndex((n) => n === 2);
// 1

/*-----------------------------------------------------------
  6. some()
-----------------------------------------------------------*/
// Comprueba si ALGÚN elemento cumple la condición.
// Devuelve: boolean.
const hayMayor = nums.some((n) => n > 2);
// true

/*-----------------------------------------------------------
  7. every()
-----------------------------------------------------------*/
// Comprueba si TODOS los elementos cumplen la condición.
// Devuelve: boolean.
const todosPositivos = nums.every((n) => n > 0);
// true

/*-----------------------------------------------------------
  8. sort()
-----------------------------------------------------------*/
// Ordena el array (¡modifica el original!)
// Devuelve: el array ordenado.
const ordenados = nums.sort((a, b) => a - b);
// [1, 2, 3]

/*-----------------------------------------------------------
  9. forEach()
-----------------------------------------------------------*/
// Recorre el array. NO devuelve nada.
// Devuelve: undefined.
nums.forEach((n) => console.log(n));

/*-----------------------------------------------------------
  10. includes()
-----------------------------------------------------------*/
// Comprueba si contiene un valor exacto.
// Devuelve: boolean.
const tieneDos = nums.includes(2);
// true

/*-----------------------------------------------------------
  11. concat()
-----------------------------------------------------------*/
// Une dos arrays.
// Devuelve: array nuevo.
const a = [1, 2],
  b = [3, 4];
const c = a.concat(b);
// [1, 2, 3, 4]

/*-----------------------------------------------------------
  12. slice()
-----------------------------------------------------------*/
// Extrae parte del array SIN modificar el original.
// Devuelve: array nuevo.
const parte = nums.slice(0, 2);
// [1, 2]

/*-----------------------------------------------------------
  13. splice()
-----------------------------------------------------------*/
// Inserta o elimina EN el array (modifica original).
// Devuelve: los elementos eliminados.
const arr = [10, 20, 30];
arr.splice(1, 1);
// arr → [10, 30]

/*-----------------------------------------------------------
  14. flat()
-----------------------------------------------------------*/
// Aplana arrays de arrays.
// Devuelve: array nuevo.
const matriz = [1, [2, 3], [4]];
const plano = matriz.flat();
// [1, 2, 3, 4]

/*-----------------------------------------------------------
  15. flatMap()
-----------------------------------------------------------*/
// Combina map() + flat() en un paso.
// Devuelve: array nuevo.
const palabras = ["hola", "adios"];
const letras = palabras.flatMap((p) => p.split(""));
// ["h","o","l","a","a","d","i","o","s"]

/****************************************************
 * CHULETA RÁPIDA DATE
 ****************************************************/

// Crear fechas
const f1 = new Date();                    // ahora
const f2 = new Date("2025-11-19");        // formato recomendado YYYY-MM-DD
const f3 = new Date(2025, 10, 19);        // (año, mes-0, día)

// Obtener partes
f2.getFullYear();   // 2025
f2.getMonth();      // 10 (noviembre → meses empiezan en 0)
f2.getDate();       // 19

// Formatos útiles
f2.toLocaleDateString("es-ES");  // "19/11/2025"
f2.toISOString();                // "2025-11-19T00:00:00.000Z"

// Diferencias (en días)
const diff = (f2 - f1) / (1000 * 60 * 60 * 24);

// Comparar fechas
if (f2 > f1) { /* f2 es posterior */ }

/****************************************************
 * CHULETA RÁPIDA setInterval (EXAMEN)
 ****************************************************/

// Ejecuta una función cada X milisegundos
const id = setInterval(() => {
    console.log("Ejecutando cada segundo");
}, 1000);

// Parar el intervalo
clearInterval(id);

// Ejemplo típico: contador regresivo
let tiempo = 5;

const intervalo = setInterval(() => {
    console.log(tiempo);
    tiempo--;

    if (tiempo < 0) {
        clearInterval(intervalo); // detener
        console.log("Fin");
    }
}, 1000);

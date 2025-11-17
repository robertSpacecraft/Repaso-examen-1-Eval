// =======================================================
// BONUS: PATRONES / ALGORITMOS ÚTILES POR TEMA
// =======================================================

"use strict";

// -------------------------
// TEMA 1: PATRONES BÁSICOS
// -------------------------

// 1) Bucle for típico sobre array
function recorrerArray(array) {
    for (let i = 0; i < array.length; i++) {
        const elemento = array[i];
        // ...
    }
}

// 2) Bucle while controlado por condición
function leerHastaSalir() {
    let texto = "";
    while (texto !== "salir") {
        texto = prompt("Escribe algo (salir para terminar):", "") ?? "";
        // ...
    }
}

// -------------------------
// TEMA 2: PATRONES DE FUNCIONES Y ARRAYS
// -------------------------

// 3) Función pura con callback
function procesarLista(lista, fnCallback) {
    const resultado = [];
    for (const elemento of lista) {
        resultado.push(fnCallback(elemento));
    }
    return resultado;
}
// Uso:
const cuadrados = procesarLista([1, 2, 3], (n) => n * n);

// 4) Buscar elemento por propiedad en array de objetos
function buscarPorId(lista, idBuscado) {
    return lista.find((elemento) => elemento.id === idBuscado) ?? null;
}

// 5) Contar cuántos elementos cumplen una condición (reduce)
function contarMayoresQue(lista, valor) {
    return lista.reduce((ac, n) => (n > valor ? ac + 1 : ac), 0);
}

// -------------------------
// TEMA 3: PATRONES DOM/REACT
// -------------------------

// 6) Toggle de clase en un nodo
function toggleClase(idElemento, clase) {
    const nodo = document.getElementById(idElemento);
    if (nodo) {
        nodo.classList.toggle(clase);
    }
}

// 7) Insertar un párrafo debajo de otro por id
function insertarParrafoDebajo(idElemento, texto) {
    const nodo = document.getElementById(idElemento);
    if (!nodo) return;
    nodo.insertAdjacentHTML("afterend", `<p>${texto}</p>`);
}

// -------------------------
// TEMA 4: PATRONES DE VALIDACIÓN
// -------------------------

// 9) Validar campo obligatorio y longitud mínima
function validarObligatorioYLongitud(valor, min) {
    const limpio = valor.trim();
    if (limpio === "") return "El campo es obligatorio.";
    if (limpio.length < min) return `Mínimo ${min} caracteres.`;
    return "";
}

// 10) Validar número dentro de un rango
function validarNumeroRango(valor, min, max) {
    const numero = Number(valor);
    if (Number.isNaN(numero)) return "Debe ser un número.";
    if (numero < min) return `Debe ser mayor o igual que ${min}.`;
    if (numero > max) return `Debe ser menor o igual que ${max}.`;
    return "";
}

// 11) Patrón general para validar formulario con varios campos
function validarFormulario(datos) {
    // datos = { nombre, edad, rol, ... }
    const errores = [];

    const errorNombre = validarObligatorioYLongitud(datos.nombre, 3);
    if (errorNombre) errores.push(errorNombre);

    const errorEdad = validarNumeroRango(datos.edad, 1, 120);
    if (errorEdad) errores.push(errorEdad);

    if (!datos.rol) errores.push("Debes seleccionar un rol.");

    return errores; // [] si todo está OK
}

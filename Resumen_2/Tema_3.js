// =======================================================
// TEMA 3 – MANIPULACIÓN DEL DOM (CHULETA)
// =======================================================

"use strict";

// -------------------------------------------------------
// 1. SELECCIÓN DE NODOS
// -------------------------------------------------------

// Por ID (rápido y típico)
const titulo_ = document.getElementById("titulo");

// Por clases / etiquetas
const cajas_ = document.getElementsByClassName("caja"); // HTMLCollection (vivo)
const parrafos_ = document.getElementsByTagName("p");

// querySelector / querySelectorAll
const primero = document.querySelector(".item");    // 1º que coincida
const todos_ = document.querySelectorAll(".item");   // NodeList (no vivo)

// Acceso al contenido
primero.textContent = "Nuevo texto sin HTML";
primero.innerHTML = "<strong>Con HTML</strong>";

// -------------------------------------------------------
// 2. CREAR, INSERTAR, BORRAR NODOS
// -------------------------------------------------------

const div = document.createElement("div");
div.textContent = "Soy nuevo";

// appendChild → al final
document.body.appendChild(div);

// insertBefore → antes de un nodo concreto
const contenedor_ = document.getElementById("contenedor");
contenedor_.insertBefore(div, contenedor_.firstElementChild);

// insertAdjacentHTML → para insertar HTML sin borrar
primero.insertAdjacentHTML("afterend", "<p>Insertado debajo</p>");

// Eliminar nodo
primero.remove(); // moderno
// o: primero.parentNode.removeChild(primero);

// -------------------------------------------------------
// 3. GESTIÓN DE CLASES Y ESTILOS
// -------------------------------------------------------

const caja = document.getElementById("caja");
caja.classList.add("activa");
caja.classList.remove("roja");
caja.classList.toggle("visible");   // añade o quita
caja.classList.contains("visible"); // true/false

// Modificar estilo directamente (solo si examen lo pide)
caja.style.backgroundColor = "red";

// -------------------------------------------------------
// 4. EVENTOS (click, mouseover, submit…)
// -------------------------------------------------------

// Añadir evento
const btn_ = document.getElementById("btn");
btn_.addEventListener("click", function (event) {
    console.log("click", event);
}, false);

// Eliminar evento
function handler() { console.log("hola"); }
btn_.addEventListener("click", handler);
btn_.removeEventListener("click", handler);

// -------------------------------------------------------
// 5. BUBBLING, CAPTURING Y DELEGACIÓN
// -------------------------------------------------------

// Burbujeo (fase por defecto → false)
padre.addEventListener("click", e => {
    console.log("click en padre");
}, false);

// Delegación → ideal para listas dinámicas
lista.addEventListener("click", e => {
    if (e.target.matches(".item")) {
        console.log("Pulso en item:", e.target.textContent);
    }
});

// -------------------------------------------------------
// 6. ESPERAR A QUE EL DOM CARGUE
// -------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    // Aquí ya existen todos los nodos
});

// -------------------------------------------------------
// 7. TABLAS DINÁMICAS
// -------------------------------------------------------

// Crear fila
const tabla_ = document.querySelector("table");
const tr_ = document.createElement("tr");
const td = document.createElement("td");
td.textContent = "Texto";
tr_.appendChild(td);
tabla_.appendChild(tr_);

// -------------------------------------------------------
// 8. OCULTAR / MOSTRAR ELEMENTOS
// -------------------------------------------------------

// Forma típica en examen: clases CSS
elemento.classList.add("oculto");   // .oculto { visibility: hidden; }
elemento.classList.remove("oculto");

// -------------------------------------------------------
// 9. CARRUSEL
// -------------------------------------------------------

const imagenes_ = ["img/a.jpg", "img/b.jpg", "img/c.jpg"];
let indice_ = 0;

setInterval(() => {
    indice_ = (indice_ + 1) % imagenes_.length;
    document.getElementById("foto").src = imagenes_[indice_];
}, 2000);

// -------------------------------------------------------
// 10. GENERAR NÚMEROS ALEATORIOS
// -------------------------------------------------------
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// -------------------------------------------------------
// 11. FUNCIONES DE APOYO FRECUENTES EN EXAMEN
// -------------------------------------------------------

// insertAfter → típico de práctica 3.01
function insertAfter(nuevo, existente) {
    existente.insertAdjacentElement("afterend", nuevo);
}

// Es primo (para práctica 3.02)
function esPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
// =======================================================
// TEMA 3 – MANIPULACIÓN DEL DOM (CHULETA)
// =======================================================

"use strict";

// -------------------------------------------------------
// 1. SELECCIÓN DE NODOS
// -------------------------------------------------------

// Por ID (rápido y típico)
const titulo = document.getElementById("titulo");

// Por clases / etiquetas
const cajas = document.getElementsByClassName("caja"); // HTMLCollection (vivo)
const parrafos = document.getElementsByTagName("p");

// querySelector / querySelectorAll
const primero = document.querySelector(".item");    // 1º que coincida
const todos = document.querySelectorAll(".item");   // NodeList (no vivo)

// Acceso al contenido
primero.textContent = "Nuevo texto sin HTML";
primero.innerHTML = "<strong>Con HTML</strong>";

// -------------------------------------------------------
// 2. CREAR, INSERTAR, BORRAR NODOS
// -------------------------------------------------------

const div = document.createElement("div");
div.textContent = "Soy nuevo";

// appendChild → al final
document.body.appendChild(div);

// insertBefore → antes de un nodo concreto
const contenedor = document.getElementById("contenedor");
contenedor_.insertBefore(div, contenedor_.firstElementChild);

// insertAdjacentHTML → para insertar HTML sin borrar
primero.insertAdjacentHTML("afterend", "<p>Insertado debajo</p>");

// Eliminar nodo
primero.remove(); // moderno
// o: primero.parentNode.removeChild(primero);

// -------------------------------------------------------
// 3. GESTIÓN DE CLASES Y ESTILOS
// -------------------------------------------------------

const caja = document.getElementById("caja");
caja.classList.add("activa");
caja.classList.remove("roja");
caja.classList.toggle("visible");   // añade o quita
caja.classList.contains("visible"); // true/false

// Modificar estilo directamente (solo si examen lo pide)
caja.style.backgroundColor = "red";

// -------------------------------------------------------
// 4. EVENTOS (click, mouseover, submit…)
// -------------------------------------------------------

// Añadir evento
const btn = document.getElementById("btn");
btn_.addEventListener("click", function (event) {
    console.log("click", event);
}, false);

// Eliminar evento
function handler() { console.log("hola"); }
btn_.addEventListener("click", handler);
btn_.removeEventListener("click", handler);

// -------------------------------------------------------
// 5. BUBBLING, CAPTURING Y DELEGACIÓN
// -------------------------------------------------------

// Burbujeo (fase por defecto → false)
padre.addEventListener("click", e => {
    console.log("click en padre");
}, false);

// Delegación → ideal para listas dinámicas
lista.addEventListener("click", e => {
    if (e.target.matches(".item")) {
        console.log("Pulso en item:", e.target.textContent);
    }
});

// -------------------------------------------------------
// 6. ESPERAR A QUE EL DOM CARGUE
// -------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    // Aquí ya existen todos los nodos
});

// -------------------------------------------------------
// 7. TABLAS DINÁMICAS
// -------------------------------------------------------

// Crear fila
const tabla = document.querySelector("table");
const tr = document.createElement("tr");
const td = document.createElement("td");
td.textContent = "Texto";
tr_.appendChild(td);
tabla_.appendChild(tr_);

// -------------------------------------------------------
// 8. OCULTAR / MOSTRAR ELEMENTOS
// -------------------------------------------------------

// Forma típica en examen: clases CSS
elemento.classList.add("oculto");   // .oculto { visibility: hidden; }
elemento.classList.remove("oculto");

// -------------------------------------------------------
// 9. CARRUSEL
// -------------------------------------------------------

const imagenes = ["img/a.jpg", "img/b.jpg", "img/c.jpg"];
let indice = 0;

setInterval(() => {
    indice_ = (indice_ + 1) % imagenes_.length;
    document.getElementById("foto").src = imagenes_[indice_];
}, 2000);

// -------------------------------------------------------
// 10. GENERAR NÚMEROS ALEATORIOS
// -------------------------------------------------------
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// -------------------------------------------------------
// 11. FUNCIONES DE APOYO FRECUENTES EN EXAMEN
// -------------------------------------------------------

// insertAfter → típico de práctica 3.01
function insertAfter(nuevo, existente) {
    existente.insertAdjacentElement("afterend", nuevo);
}

// Es primo (para práctica 3.02)
function esPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

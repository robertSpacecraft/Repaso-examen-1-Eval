// =======================================================
// TEMA 3: DOM, BOM, MANEJO DE NODOS Y REACT (VIRTUAL DOM)
// =======================================================

"use strict";



// window.alert("Mensaje");
// const respuesta = window.confirm("¿Seguro?");
// const nombre = window.prompt("Tu nombre", "");

// Objeto location: información sobre la URL
// location.href     -> URL completa
// location.pathname -> ruta del recurso
// location.search   -> parámetros ?a=b&c=d

// -------------------------
// SELECCIÓN DE NODOS (DOM CLÁSICO)
// -------------------------

// Por id (rápido y típico)
const titulo = document.getElementById("titulo");

// Por clase / etiqueta (HTMLCollection vivo)
const parrafosHTMLCollection = document.getElementsByTagName("p");
const destacadosHTMLCollection = document.getElementsByClassName("destacado");

// querySelector / querySelectorAll (NodeList estático)
const primerParrafo = document.querySelector("p");
const parrafos = document.querySelectorAll("p");
const terceroPorId = document.querySelector("#tres");
const dentroDeDiv = document.querySelector("div p");

// -------------------------
// CREAR / INSERTAR / REEMPLAZAR / BORRAR
// -------------------------

function crearParrafoDinamico() {
    const nuevoP = document.createElement("p");
    // innerHTML interpreta etiquetas
    nuevoP.innerHTML = "<strong>Nuevo párrafo dinámico</strong>";
    nuevoP.id = "mi-parrafo";
    document.body.appendChild(nuevoP); // al final del body
}

// insertAdjacentHTML: no reemplaza, inserta alrededor del nodo
function insertarDespuesDe(elemento, html) {
    elemento.insertAdjacentHTML("afterend", html);
}

// removeChild: eliminar un nodo
function borrarNodoPorId(id) {
    const nodo = document.getElementById(id);
    if (nodo && nodo.parentNode) {
        nodo.parentNode.removeChild(nodo);
    }
}

// -------------------------
// GESTIÓN DE CLASES Y ESTILOS
// -------------------------

const divBatman = document.querySelector("#batman");

// Evitar style directo en examen salvo que lo pidan
divBatman.style.color = "blue";
divBatman.style.border = "1px solid black";

// classList: forma recomendada
divBatman.classList.add("css-class");
divBatman.classList.remove("otra-clase");
divBatman.classList.toggle("activo"); // añade o quita
const tieneClase = divBatman.classList.contains("css-class");


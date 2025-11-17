"use strict";

const form = document.getElementById("formRegistro");
const inputNombre = document.getElementById("nombre");
const inputEdad = document.getElementById("edad");
const inputEmail = document.getElementById("email");
const selectCategoria = document.getElementById("categoria");
const checkAcepto = document.getElementById("acepto");
const btnLimpiar = document.getElementById("btnLimpiar");

const divErrores = document.getElementById("errores");
const divResultado = document.getElementById("resultado");

form.addEventListener("submit", manejarSubmit);
btnLimpiar.addEventListener("click", manejarClickLimpiar);

function manejarSubmit(event) {
    event.preventDefault();     // Evita recargar la página

    // Limpiar errores previos
    divErrores.innerHTML = "";
    divResultado.innerHTML = "";

    const errores = [];

    const nombre = inputNombre.value.trim();
    const edad = Number(inputEdad.value);
    const email = inputEmail.value.trim();
    const categoria = selectCategoria.value;
    const acepto = checkAcepto.checked;

    // ----- VALIDACIONES -----

    // nombre
    if (nombre.length < 3) {
        errores.push("El nombre debe tener al menos 3 caracteres.");
    }

    // edad
    if (Number.isNaN(edad)) {
        errores.push("La edad debe ser un número válido.");
    } else if (edad < 18 || edad > 120) {
        errores.push("La edad debe estar entre 18 y 120.");
    }

    // email simple
    if (!email.includes("@") || !email.includes(".")) {
        errores.push("Debes introducir un email válido.");
    }

    // categoría
    if (categoria === "") {
        errores.push("Debes seleccionar una categoría.");
    }

    // condiciones
    if (!acepto) {
        errores.push("Debes aceptar las condiciones.");
    }

    // ----- SI HAY ERRORES -----
    if (errores.length > 0) {
        const ul = document.createElement("ul");

        errores.forEach(err => {
            const li = document.createElement("li");
            li.textContent = err;
            ul.appendChild(li);
        });

        divErrores.appendChild(ul);
        return;
    }

    // ----- SI TODO ES CORRECTO -----
    const resumen = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Edad:</strong> ${edad}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Categoría:</strong> ${categoria}</p>
    `;

    divResultado.innerHTML = resumen;

    // Limpiar formulario
    form.reset();
}

function manejarClickLimpiar() {
    divErrores.innerHTML = "";
    divResultado.innerHTML = "";
    form.reset();
}

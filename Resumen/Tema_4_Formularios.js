// =======================================================
// TEMA 4: FORMULARIOS, VALIDACIÓN Y EVENTOS BÁSICOS
// =======================================================

"use strict";

// -------------------------
// SELECCIÓN DE FORMULARIO Y CAMPOS
// -------------------------

// Supongamos un formulario con id="form-usuario"
const formUsuario = document.querySelector("#form-usuario");

// Acceso a campos típicos
const inputNombre = document.querySelector("#nombre");
const inputEdad = document.querySelector("#edad_");
const selectRol = document.querySelector("#rol");
const erroresDiv = document.querySelector("#errores"); // contenedor mensajes

// -------------------------
// EVENTO SUBMIT + preventDefault()
// -------------------------

formUsuario.addEventListener("submit", function (event) {
    // Evitar que se envíe si hay errores
    event.preventDefault();

    const errores = [];

    // Campo obligatorio (string no vacío, recortando espacios)
    const nombre = inputNombre.value.trim();
    if (nombre === "") {
        errores.push("El nombre es obligatorio.");
    }

    // Campo numérico > 0
    const edad = Number(inputEdad.value);
    if (Number.isNaN(edad)) {
        errores.push("La edad debe ser un número.");
    } else if (edad <= 0) {
        errores.push("La edad debe ser positiva.");
    }

    // Select con opción por defecto "" o similar
    if (selectRol.value === "") {
        errores.push("Debes seleccionar un rol.");
    }

    // Mostrar errores o enviar
    if (errores.length > 0) {
        mostrarErrores(errores);
    } else {
        limpiarErrores();
        // Aquí "usar los datos" (ej: simular guardar o mostrar resumen)
        mostrarResumen({ nombre, edad, rol: selectRol.value });
        // Si el enunciado lo pide, aquí SÍ se puede hacer formUsuario.submit()
    }
});

// -------------------------
// EVENTOS CLICK Y OTROS
// -------------------------

const btnLimpiar = document.querySelector("#btn-limpiar");

if (btnLimpiar) {
    btnLimpiar.addEventListener("click", function () {
        formUsuario.reset();  // Resetea el formulario
        limpiarErrores();
    });
}

// Validación "en tiempo real" (input) opcional
inputNombre.addEventListener("input", function () {
    if (inputNombre.value.trim() !== "") {
        // podríamos quitar el error asociado al nombre
    }
});

// -------------------------
// FUNCIONES DE APOYO (REUTILIZABLES)
// -------------------------

function mostrarErrores(listaErrores) {
    // Opción sencilla: unir con <br>
    erroresDiv.innerHTML = "";
    const ul = document.createElement("ul");
    listaErrores.forEach((mensaje) => {
        const li = document.createElement("li");
        li.textContent = mensaje;
        ul.appendChild(li);
    });
    erroresDiv.appendChild(ul);
    erroresDiv.classList.add("visible"); // .visible en CSS para mostrarlo
}

function limpiarErrores() {
    erroresDiv.innerHTML = "";
    erroresDiv.classList.remove("visible");
}

// "Obtener los datos del formulario para utilizarlos" (ejemplo)
function mostrarResumen(datos) {
    // datos = {nombre, edad, rol}
    const resumenDiv = document.querySelector("#resumen");
    if (!resumenDiv) return;

    resumenDiv.innerHTML = `
        <p>Nombre: <strong>${datos.nombre}</strong></p>
        <p>Edad: <strong>${datos.edad}</strong></p>
        <p>Rol: <strong>${datos.rol}</strong></p>
    `;
}

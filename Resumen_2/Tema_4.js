// =======================================================
// TEMA 4 – FORMULARIOS, VALIDACIÓN, SUBMIT, CLICK
// =======================================================

"use strict";

// -------------------------------------------------------
// 1. CAPTURAR ELEMENTOS DEL FORMULARIO
// -------------------------------------------------------

const form = document.querySelector("#formUsuario");
const inputNombre = document.querySelector("#nombre");
const inputEdad = document.querySelector("#edad");
const inputEmail = document.querySelector("#email");
const erroresDiv = document.querySelector("#errores");

// -------------------------------------------------------
// 2. EVENTO SUBMIT (el más importante del examen)
// -------------------------------------------------------

form.addEventListener("submit", function (event) {
    // Impide enviar el formulario si hay errores
    event.preventDefault();

    const errores = [];

    // -------------------------------------------------------
    // 3. VALIDACIONES TÍPICAS DE EXAMEN
    // -------------------------------------------------------

    // Campo obligatorio (trim para evitar solo espacios)
    const nombre = inputNombre.value.trim();
    if (nombre === "") {
        errores.push("El nombre es obligatorio.");
    }

    // Número válido
    const edad = Number(inputEdad.value);
    if (Number.isNaN(edad)) {
        errores.push("La edad debe ser un número.");
    } else if (edad < 0) {
        errores.push("La edad no puede ser negativa.");
    }

    // Validación de email básica
    const email = inputEmail.value.trim();
    if (!email.includes("@") || !email.includes(".")) {
        errores.push("El email no es válido.");
    }

    // -------------------------------------------------------
    // 4. MOSTRAR ERRORES / ENVIAR FORMULARIO
    // -------------------------------------------------------

    if (errores.length > 0) {
        mostrarErrores(errores);
    } else {
        limpiarErrores();
        mostrarResumen({ nombre, edad, email });

        // Si el examen lo pidiera: form.submit();
    }
});

// -------------------------------------------------------
// 5. FUNCIÓN PARA MOSTRAR ERRORES
// -------------------------------------------------------

function mostrarErrores(lista) {
    erroresDiv.innerHTML = "";
    const ul = document.createElement("ul");

    lista.forEach((error) => {
        const li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });

    erroresDiv.appendChild(ul);
    erroresDiv.classList.add("visible");
}

// -------------------------------------------------------
// 6. FUNCIÓN PARA LIMPIAR ERRORES
// -------------------------------------------------------

function limpiarErrores() {
    erroresDiv.innerHTML = "";
    erroresDiv.classList.remove("visible");
}

// -------------------------------------------------------
// 7. MOSTRAR RESUMEN (USO DE LOS DATOS DEL FORMULARIO)
// -------------------------------------------------------

function mostrarResumen({ nombre, edad, email }) {
    const destino = document.querySelector("#resultado");
    destino.innerHTML = `
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Edad:</strong> ${edad}</p>
    <p><strong>Email:</strong> ${email}</p>
  `;
}

// -------------------------------------------------------
// 8. BOTÓN EXTRA (click)
// -------------------------------------------------------

const btnReset = document.querySelector("#btnReset");

btnReset.addEventListener("click", () => {
    form.reset();
    limpiarErrores();
});

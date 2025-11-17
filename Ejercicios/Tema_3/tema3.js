"use strict";

const alumnos = [
    { nombre: "Ana", nota: 8 },
    { nombre: "Luis", nota: 6 },
    { nombre: "Marta", nota: 9 },
    { nombre: "Carlos", nota: 4 },
    { nombre: "Elena", nota: 10 },
    { nombre: "Jorge", nota: 7 },
    { nombre: "Lucía", nota: 5 },
    { nombre: "Pablo", nota: 3 },
    { nombre: "Sofía", nota: 2 },
    { nombre: "Daniel", nota: 0 },
];


const btnCrearTabla = document.getElementById('btnCrearTabla');
const btnAdd = document.getElementById('btnAdd');
const btnSuspensos = document.getElementById('btnSuspensos');
const btnAprobados = document.getElementById('btnAprobados');
const btnReset = document.getElementById('btnReset');

const inputNombre = document.getElementById('nombreEntrada');
const inputNota = document.getElementById('notaEntrada');

const contenedorTabla = document.getElementById('contenedorTabla');

const divMensajes = document.getElementById('mensajes');

//Funciones
function crearTablaInicial(){
    contenedorTabla.innerHTML = "";
    const tabla = document.createElement('table');
    const thead = document.createElement('thead');
    const trHead = document.createElement('tr');

    const thNombre = document.createElement('th');
    thNombre.textContent = "Nombre";
    const thNota = document.createElement('th');
    thNota.textContent = "Nota";
    const thacciones = document.createElement('th');
    thacciones.textContent = "Acciones";

    trHead.appendChild(thNombre);
    trHead.appendChild(thNota);
    trHead.appendChild(thacciones);
    thead.appendChild(trHead);

    const tbody = document.createElement('tbody');

    alumnos.forEach(alumno => {
        const trBody = document.createElement('tr');
        const tdNombre = document.createElement('td');
        tdNombre.textContent = alumno.nombre;
        const tdNota = document.createElement('td');
        tdNota.textContent = alumno.nota;
        tdNota.classList.add("nota");
        const tdAcciones = document.createElement('td');
        const btnBorrar = document.createElement('button');
        btnBorrar.textContent = "Borrar";
        btnBorrar.classList.add("btn-borrar");
        tdAcciones.appendChild(btnBorrar);
        trBody.append(tdNombre, tdNota, tdAcciones);
        tbody.appendChild(trBody);
    });

    tabla.appendChild(thead);
    tabla.appendChild(tbody);
    contenedorTabla.appendChild(tabla);
};


function manejarClickAdd(){
    divMensajes.innerHTML = "";
    const inputNombreValue = inputNombre.value;
    const inputNotaValue = parseFloat(inputNota.value);
    if(inputNombreValue.trim() === "") {
        divMensajes.textContent = "Error: Nombre vacío.";
        } else if (isNaN(inputNotaValue)){
        divMensajes.textContent = "Error: Nota no es un número válido.";
        } else if (inputNotaValue < 0 || inputNotaValue > 10){
        divMensajes.textContent = "Error: Nota fuera de rango (0-10).";
    } else {
    alumnos.push({ nombre: inputNombreValue, nota: inputNotaValue });
    divMensajes.textContent = "Alumno añadido correctamente.";
    crearTablaInicial();
    inputNombre.value = "";
    inputNota.value = "";
    }
}

function manejarClickSuspensos(event){

}

function manejarClickAprobados(event){

}

function manejarClickReset(event){

}

//Funcionalidad botones

btnAdd.addEventListener("click", manejarClickAdd());

btnSuspensos.addEventListener("click", manejarClickSuspensos);

btnAprobados.addEventListener("click", manejarClickAprobados);

btnReset.addEventListener("click", manejarClickReset);





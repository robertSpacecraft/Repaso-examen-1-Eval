//Como trabajamos cuando los datos están en otro archivo
/************************************************************/
/************************************************************/
// alumnos.js
"use strict";

export const ALUMNOS_INICIALES = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Luis", nota: 6 },
  { nombre: "Marta", nota: 9 }
];
/************************************************************/
//Código principal
// app.js
"use strict";

import { ALUMNOS_INICIALES } from "./alumnos.js";

const alumnos = [...ALUMNOS_INICIALES];   // hago copia si quiero modificar

console.log(alumnos);
// aquí ya trabajas igual que antes: map, filter, DOM, etc.

//En html al final del body: <script type="module" src="app.js"></script>

/************************************************************/
/************************************************************/
//Si es JSON:

//Archivo: alumnos.json
[
  { "nombre": "Ana", "nota": 8 },
  { "nombre": "Luis", "nota": 6 },
  { "nombre": "Marta", "nota": 9 }
]
/************************************************************/
//Código principal
// app.js

"use strict";

// Cargar alumnos desde un archivo JSON
fetch("./alumnos.json")
  .then(respuesta => respuesta.json())  // convierte JSON → array JS
  .then(alumnos => {
    console.log("Alumnos cargados:", alumnos);
    // aquí ya puedes:
    // - pintarlos en una tabla
    // - filtrarlos
    // - etc.
  })
  .catch(error => {
    console.error("Error al cargar alumnos.json", error);
  });

/************************************************************/
/************************************************************/
/************************************************************
 * CHULETA JSON – Entrada y salida
 ************************************************************/

/*
JSON = texto con formato especial (llaves, corchetes, comillas dobles).
Se usa para intercambiar datos: servidor <-> navegador, localStorage, etc.
*/

/*-----------------------------------------------------------
  1. Convertir un OBJETO/ARRAY de JS a JSON (SALIDA)
-----------------------------------------------------------*/

const alumno = { nombre: "Ana", nota: 8 };
const alumnos = [
    { nombre: "Ana", nota: 8 },
    { nombre: "Luis", nota: 6 }
];

// JS → JSON (string)
const jsonAlumno = JSON.stringify(alumno);
// "{\"nombre\":\"Ana\",\"nota\":8}"

const jsonAlumnos = JSON.stringify(alumnos);
// "[{\"nombre\":\"Ana\",\"nota\":8},{\"nombre\":\"Luis\",\"nota\":6}]"

// Suele usarse para:
localStorage.setItem("alumnos", jsonAlumnos);
// enviar al servidor con fetch (body: jsonAlumnos), etc.


/*-----------------------------------------------------------
  2. Convertir JSON (string) a OBJETO/ARRAY JS (ENTRADA)
-----------------------------------------------------------*/

// JSON → JS
const textoJson = '{"nombre":"Ana","nota":8}';
const objDesdeJson = JSON.parse(textoJson);
// objDesdeJson.nombre → "Ana"
// objDesdeJson.nota   → 8

const textoJsonLista = '[{"nombre":"Ana","nota":8},{"nombre":"Luis","nota":6}]';
const listaDesdeJson = JSON.parse(textoJsonLista);
// listaDesdeJson[0].nombre → "Ana"


/*-----------------------------------------------------------
  3. Ejemplo típico: leer de localStorage
-----------------------------------------------------------*/

const guardado = localStorage.getItem("alumnos");
let alumnosRecuperados = [];

if (guardado !== null) {
    alumnosRecuperados = JSON.parse(guardado);  // array de alumnos
}

/*
RESUMEN:
- JSON.stringify(obj) → string JSON (para guardar/enviar).
- JSON.parse(stringJSON) → objeto/array JS (para usar en código).
*/

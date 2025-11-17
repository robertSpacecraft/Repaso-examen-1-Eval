"use strict";

//Creo un array de objetos

const userSessions = [
    {
        id: 1,
        nombre: "Ana",
        duracion: 45,
        fecha: new Date('2025-11-02'),
        acciones: ["click", "scroll"]
    },
    {
        id: 2,
        nombre: "Paco",
        duracion: 120,
        fecha: new Date('2025-05-05'),
        acciones: ["submit", "index", "add"]
    },
    {
        id: 3,
        nombre: "Robert",
        duracion: 12,
        fecha: new Date('2025-12-02'),
        acciones: ["list", "click", "exit"]
    },
    {
        id: 4,
        nombre: "Maria",
        duracion: 115,
        fecha: new Date('2025-09-25'),
        acciones: ["index", "input", "click", "exit"]
    },
    {
        id: 5,
        nombre: "Eva",
        duracion: 88,
        fecha: new Date('2025-06-15'),
        acciones: ["buy", "click", "exit"]
    },
    {
        id: 6,
        nombre: "Antonio",
        duracion: 225,
        fecha: new Date('2025-04-30'),
        acciones: ["index", "input", "change", "exit", "delete"]
    }

];

console.log(userSessions);

function formatearDuracion(segundos) {
    const minutos = Math.floor(segundos / 60);
    const sec = segundos % 60;

    const minStr = minutos.toString().padStart(2, "0");
    const secStr = sec.toString().padStart(2, "0");

    return `${minStr}:${secStr}`;
}

function generarInforme(usuario) {
    const { nombre, duracion, acciones } = usuario;

    const tiempo = formatearDuracion(duracion);
    const numeroAcciones = acciones.length;
    const esActivo = duracion > 120;

    return {
        nombre,
        tiempo,
        numeroAcciones,
        esActivo
    };
}

console.log(generarInforme(userSessions[0]));

function filtrarUsuarios(listaUsuarios, callback) {
    const resultado = [];

    for (const usuario of listaUsuarios) {
        if (callback(usuario)) {
            resultado.push(usuario);
        }
    }

    return resultado;
}

function calcularEstadisticas(listaUsuarios) {
    if (!Array.isArray(listaUsuarios) || listaUsuarios.length === 0) {
        return {
            totalUsuarios: 0,
            tiempoTotal: 0,
            tiempoMedio: 0,
            masActivo: null,
            menosAcciones: null
        };
    }

    const totalUsuarios = listaUsuarios.length;

    // Tiempo total con reduce
    const tiempoTotal = listaUsuarios.reduce(
        (acum, usuario) => acum + usuario.duracion,
        0
    );

    const tiempoMedio = tiempoTotal / totalUsuarios;

    // Usuario más activo (mayor duración)
    const masActivo = listaUsuarios.reduce((maxUsuario, usuario) => {
        return usuario.duracion > maxUsuario.duracion ? usuario : maxUsuario;
    }, listaUsuarios[0]);

    // Usuario con menos acciones
    const menosAcciones = listaUsuarios.reduce((minUsuario, usuario) => {
        return usuario.acciones.length < minUsuario.acciones.length ? usuario : minUsuario;
    }, listaUsuarios[0]);

    return {
        totalUsuarios,
        tiempoTotal,
        tiempoMedio,
        masActivo,
        menosAcciones
    };
}

const estadisticas = calcularEstadisticas(userSessions);
console.log("Estadísticas generales:", estadisticas);

// Si quieres ver el informe del usuario más activo:
if (estadisticas.masActivo) {
    console.log(
        "Informe usuario más activo:",
        generarInforme(estadisticas.masActivo)
    );
}


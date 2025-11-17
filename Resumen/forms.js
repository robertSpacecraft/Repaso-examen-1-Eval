/*********************************************************
 * MINI-CHULETA DE EVENTOS – LO ESENCIAL PARA EXAMEN
 *********************************************************/

/*---------------------------------------------------------
  event.preventDefault()
---------------------------------------------------------*/
// Evita la acción por defecto del navegador.
// Formulario: evita recargar/enviar.
// Enlace: evita navegar.
// Drag & drop: necesario para permitir soltar.

form.addEventListener("submit", e => {
    e.preventDefault();
});


/*---------------------------------------------------------
  event.target
---------------------------------------------------------*/
// Elemento EXACTO que originó el evento.
// Útil para botones dentro de tablas/listas.

document.addEventListener("click", e => {
    console.log(e.target);
});


/*---------------------------------------------------------
  event.currentTarget
---------------------------------------------------------*/
// Elemento al que está asociado el listener.
// Diferente de target cuando hay delegación.

parent.addEventListener("click", e => {
    console.log(e.currentTarget); // el parent
});


/*---------------------------------------------------------
  event.stopPropagation()
---------------------------------------------------------*/
// Detiene la propagación del evento hacia padres.
// Útil cuando no quieres que salte un listener superior.

child.addEventListener("click", e => {
    e.stopPropagation();
});


/*---------------------------------------------------------
  event.key / event.code
---------------------------------------------------------*/
// Para detectar teclas pulsadas en eventos de teclado.

input.addEventListener("keydown", e => {
    console.log(e.key); // "Enter", "a", "Escape"…
});

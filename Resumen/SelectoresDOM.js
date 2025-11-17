/************************************************************
 * CHULETA DOM – Métodos más usados (resumen para examen)
 ************************************************************/

/*-----------------------------------------------------------
  1. document.getElementById(id)
-----------------------------------------------------------*/
// Obtiene un ÚNICO elemento por su ID.
// Devuelve: HTMLElement (objeto), o null si no existe.
const caja = document.getElementById("caja");
// console.log(caja);


/*-----------------------------------------------------------
  2. document.getElementsByClassName(className)
-----------------------------------------------------------*/
// Obtiene TODOS los elementos con esa clase.
// Devuelve: HTMLCollection (lista viva, se actualiza sola).
const items = document.getElementsByClassName("item");
// console.log(items[0]);


/*-----------------------------------------------------------
  3. document.getElementsByTagName(tag)
-----------------------------------------------------------*/
// Obtiene elementos por etiqueta (p, div, li…)
// Devuelve: HTMLCollection (lista viva).
const parrafos = document.getElementsByTagName("p");
// console.log(parrafos.length);


/*-----------------------------------------------------------
  4. document.querySelector(selector)
-----------------------------------------------------------*/
// Selecciona el PRIMER elemento que coincide con el selector CSS.
// Devuelve: Element o null (no lista).
const primero = document.querySelector(".caja");
// console.log(primero);


/*-----------------------------------------------------------
  5. document.querySelectorAll(selector)
-----------------------------------------------------------*/
// Selecciona TODOS los elementos que coinciden con el selector CSS.
// Devuelve: NodeList (NO es viva; no se actualiza sola).
const todos = document.querySelectorAll(".item");
// todos.forEach(el => console.log(el));


/************************************************************
 * DIFERENCIA ENTRE HTMLCollection y NodeList
 ************************************************************/
/*
HTMLCollection → vivo (cambios en el DOM lo actualizan).
NodeList (querySelectorAll) → estático (no cambia solo).
*/


/************************************************************
 * 6. element.innerHTML
 ************************************************************/
// Lee/escribe HTML dentro de un elemento.
// Devuelve: string.
caja.innerHTML = "<p>Texto <strong>HTML</strong></p>";


/************************************************************
 * 7. element.textContent
 ************************************************************/
// Devuelve solo texto (sin HTML).
// Devuelve: string.
caja.textContent = "Solo texto sin etiquetas";


/************************************************************
 * 8. document.createElement(tag)
 ************************************************************/
// Crea un nuevo nodo HTML en memoria.
// Devuelve: HTMLElement.
const nuevo = document.createElement("div");


/************************************************************
 * 9. document.createTextNode(texto)
 ************************************************************/
// Crea un nodo de texto.
// Devuelve: TextNode.
const txt = document.createTextNode("Hola mundo");
// nuevo.appendChild(txt);


/************************************************************
 * 10. element.appendChild(node)
 ************************************************************/
// Inserta un hijo AL FINAL del elemento.
// Devuelve: el nodo añadido.
nuevo.appendChild(txt);


/************************************************************
 * 11. element.append(node1, node2...)
 ************************************************************/
// Igual que appendChild pero puede insertar varios nodos o texto.
// Devuelve: (nada).
caja.append("Texto", nuevo);


/************************************************************
 * 12. element.prepend(node)
 ************************************************************/
// Inserta un nodo AL PRINCIPIO.
caja.prepend(nuevo);


/************************************************************
 * 13. element.remove()
 ************************************************************/
// Elimina el elemento del DOM.
nuevo.remove();


/************************************************************
 * 14. element.classList.add/remove/toggle
 ************************************************************/
// Manipula clases CSS.
caja.classList.add("rojo");
caja.classList.remove("rojo");
caja.classList.toggle("activo");  // activa/desactiva


/************************************************************
 * 15. element.setAttribute(name, value)
 ************************************************************/
// Añade o modifica un atributo.
caja.setAttribute("data-id", "123");


/************************************************************
 * 16. element.getAttribute(name)
 ************************************************************/
// Obtiene el valor de un atributo.
const valor = caja.getAttribute("data-id");


/************************************************************
 * 17. element.style.propiedad
 ************************************************************/
// Cambia estilos directamente.
caja.style.color = "red";
caja.style.backgroundColor = "yellow";


/************************************************************
 * 18. element.parentNode
 ************************************************************/
// Devuelve el nodo padre (útil para borrar).
const padre = caja.parentNode;


/************************************************************
 * 19. element.children
 ************************************************************/
// Devuelve colección HTML de hijos ELEMENTO (no nodos de texto).
const hijos = caja.children;


/************************************************************
 * 20. event.target
 ************************************************************/
// En eventos, indica QUÉ elemento originó el clic.
document.addEventListener("click", (e) => {
    // console.log("Has hecho click en:", e.target);
});


/************************************************************
 * 21. element.closest(selector)
 ************************************************************/
// Busca el ancestro más cercano que cumpla el selector.
// Muy útil para "borrar filas" en tablas.
document.addEventListener("click", (e) => {
    const fila = e.target.closest("tr");
});


/************************************************************
 * 22. event.preventDefault()
 ************************************************************/
// Cancela la acción por defecto (submit, enlaces…)
form.addEventListener("submit", (e) => {
    e.preventDefault();
});

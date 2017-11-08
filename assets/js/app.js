//creando evento para que aparezca input y reemplace el button

var padre = document.getElementById("padre_tablero");
var hijo = document.getElementById("tablero");
var nuevoDiv = document.getElementById("nuevo")

//crenaod evento de click
hijo.addEventListener("click", function(){
/*	//ocultando hijo
	hijo.style.display = "none";
*/

	//creando un div para el input
	var nuevoDiv = document.createElement("div");
	nuevoDiv.classList.add("nuevo");  // dar clase para editar en css
	padre.insertBefore(nuevoDiv, hijo);

	//creando input
	var input = document.createElement("input");
	//agregando placeholder a input
	input.setAttribute("placeholder","Agregar una nueva lista");
	//agregando clase a input 
	input.classList.add("inpt");

	//creando button
	var button = document.createElement("button");
	//agregando una clase al botón
	button.classList.add("btn");
	//creando texto del button
	var save = document.createTextNode("Guardar");
	//agregando nodo de texto al botón
	button.appendChild(save);

/*	//agregando input al padre
	padre.appendChild("input");*/

	//reemplazando hijo por nuevoDiv
	padre.replaceChild(nuevoDiv,hijo);
	//agregando input a nuevoDiv
	nuevoDiv.appendChild(input);
	//agregando button al padre
	nuevoDiv.appendChild(button);
})


/*var tablero = getElementsById('tablero');

tablero.addEventListener('click', function(){
	 
	var padreTablero = getElementById('padre_tablero');
	var tablero = getElementsById('tablero');
//Borrar tablero
	padreTablero.removeChild(tablero);
//creando input

		
	
})*/

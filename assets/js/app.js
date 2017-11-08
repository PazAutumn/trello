//creando evento para que aparezca input y reemplace el button

var padre = document.getElementById("padre_tablero");
var hijo = document.getElementById("tablero");


//crenaod evento de click
hijo.addEventListener("click", function{
	//ocultando hijo
	hijo.style.display = "none";

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
	button.appendChild("save");

	//agregando input al padre
	padre.appendChild("input");
	//agregando button al padre
	padre.appendChild("button");
})


/*var tablero = getElementsById('tablero');

tablero.addEventListener('click', function(){
	 
	var padreTablero = getElementById('padre_tablero');
	var tablero = getElementsById('tablero');
//Borrar tablero
	padreTablero.removeChild(tablero);
//creando input

		
	
})*/

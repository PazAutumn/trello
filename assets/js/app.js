//creando evento para que aparezca input y reemplace el button

var padre = document.getElementById("padre_tablero");
var hijo = document.getElementById("tablero");


//creando evento de click en el botón añadir una lista
hijo.addEventListener("click", function(){
	//ocultando hijo
	hijo.style.display = "none";

//guardando en variables elementos ocultos que utilizaremos

	//div nuevo
	var nuevoDiv = document.getElementById('nuevo');
	
	//visivilizando nuevoDiv (input-button)
	nuevoDiv.style.display = "inherit";
})

//guardando en variables elementos ocultos que utilizaremos
//div nuevo
var nuevoDiv = document.getElementById('nuevo');
//input "inpt"
var input = document.getElementById("inpt");
//button "btn"
var button = document.getElementById("btn");
//div padre
var padre = document.getElementById('padre_tablero');
//h4
var elementoLista = document.getElementById('nombreLista');
//a
var crearTarjeta = document.getElementById('textoA');


//crear evento de click en el botón guardar
button.addEventListener("click", function(){

	//ocultar nuevoDiv
	nuevoDiv.style.display = "inline-block";
	//rescatar el texto que ingresó el usuario en el input
	var nombreLista = document.getElementById('inpt').value;
	//creando nodo de texto para nombreLista
	var nodoTextInput = document.createTextNode(nombreLista);
	
//Haciendo appendChild
	//<h4>nombre lista</h4>
	elementoLista.appendChild(nodoTextInput);

	//visibilizando elementos necesarios
	//visibilizando div contenedor (nombreLista y elementoA)
	contenedorNombreLista.style.display = "inherit";
	//visibilizando a
	textoA.style.display = "inherit";
		
})
		
			
//guardando en variables elementos ocultos que utilizaremos
//a
var crearTarjeta = document.getElementById('textoA');
//div contenedorNombreLista
var contenedorNombreLista = document.getElementById('contenedorNombreLista');
//textarea
var txt = document.getElementById('txt');
//button añadir
var btn2 = document.getElementById('btn2');

//creando evento de click en el link crear una tarjeta
crearTarjeta.addEventListener("click", function(){
	//ocultando crearTarjeta
	crearTarjeta.style.display = "none";
	//visibilizando textarea
	txt.style.display = "inherit";
	//visibilizando button Añadir
	btn2.style.display = "inherit";
})

//guardando en variables elementos ocultos que utilizaremos
//div contenedorNombreLista
var contenedorNombreLista = document.getElementById('contenedorNombreLista');
//textarea
var txt = document.getElementById('txt');
//button añadir
var btn2 = document.getElementById('btn2');

//creando evento de click en el botón añadir
btn2.addEventListener("click", function(){

	//rescatar lo escrito en el textarea
	var nombreTarjeta = document.getElementById('txt').value;
	//limpiando textarea
	document.getElementById('txt').value = "";

//creando elementos necesarios
	//crear nuevo div contenedor de los datos ingresados por el usuario en el textarea
	var lista = document.createElement("div");
	//agregando clase a div
	lista.setAttribute("class", "contenedorNombreTarjeta");
	//creando nodo de texto para textarea
	var nodoTextoTarjeta = document.createTextNode(nombreTarjeta);
//Haciendo appendChild
	//agregando nodo de texto a div nombre
	lista.appendChild(nodoTextoTarjeta);
	//agregando div al contenedorNombreLista antes del textarea
	contenedorNombreLista.insertBefore(lista, txt); 
})

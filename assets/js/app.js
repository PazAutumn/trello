//creando evento para que aparezca input y reemplace el button

var padre = document.getElementById("padre_tablero");
var hijo = document.getElementById("tablero");


//creando evento de click en el botón añadir una lista
hijo.addEventListener("click", function(){
	//ocultando hijo
	hijo.style.display = "none";

	//creando un div para el input y el button
	var nuevoDiv = document.createElement("div");
	//agregando id
	nuevoDiv.setAttribute("id","nuevo");
	//insertando nuevoDiv en el padre, antes de hijo
	padre.insertBefore(nuevoDiv, hijo);

	//creando input
	var input = document.createElement("input");
	//agregando placeholder a input
	input.setAttribute("placeholder","Añadir una lista...");
	//agregando id a input 
	input.setAttribute("id","inpt");

	//creando button
	var button = document.createElement("button");
	//agregando una id al botón
	button.setAttribute("id","btn");
	//creando texto del button
	var save = document.createTextNode("Guardar");
	//agregando nodo de texto al botón
	button.appendChild(save);

/*	//agregando input al padre
	padre.appendChild("input");*/

	//agregando nuevoDiv a padre
	padre.appendChild(nuevoDiv);
	//agregando input a nuevoDiv
	nuevoDiv.appendChild(input);
	//agregando button al padre
	nuevoDiv.appendChild(button);



	//crear evento de click en el botón guardar

		var button = document.getElementById('btn');

	button.addEventListener("click", function(){
		//guardar div padre en una variable
		var padre = document.getElementById('padre_tablero');
		//guardar div hijo en una variable
		var nuevoDiv = document.getElementById('nuevo');

		//ocultar nuevoDiv
		nuevoDiv.style.display = "none";

		//rescatar el texto que ingresó el usuario en el input
		var nombreLista = document.getElementById('inpt').value;
		//creando nodo de texto para nombreLista
		var nodoTextInput = document.createTextNode(nombreLista);

	//creando elementos necesarios
		//creando div contenedor de mi nombre lista y elemento a
		var contenedorNombreLista = document.createElement("div");
		//agregando id
		contenedorNombreLista.setAttribute("id","contenedorNombreLista");

		//creando etiqueta de negrita para nombreLista
		var elementoLista = document.createElement("h4");
		//creando texto de tarjeta
		var textoTarjeta = document.createTextNode("Añadir tarjeta");

		//creando elemento "a"
		var elementoA = document.createElement("a");
		//agregando atributo href
		elementoA.setAttribute("href","#");
		//creando nodo de texto para "a"
		var textoTarjeta = document.createTextNode("Añadir una tarjeta...");
		//creando id para a
		elementoA.setAttribute("id", "textoA");	

	//Haciendo appendChild

		//<strong>nombre lista</strong>
		elementoLista.appendChild(nodoTextInput);
		//<a href="#">añadir tarjeta</a>
		elementoA.appendChild(textoTarjeta);
		//agregando elemento lista a contenedorNombreLista
		contenedorNombreLista.appendChild(elementoLista);
		//agregando  elementoA a contenedorNombreLista
		contenedorNombreLista.appendChild(elementoA);
		//agregando contenedorNombreLista a padre 
		padre.appendChild(contenedorNombreLista);

		
		//creando evento de click en el link crear una tarjeta
			
			//elementos existentes que necesitaré
			var crearTarjeta = document.getElementById('textoA');
			var contenedorNombreLista = document.getElementById('contenedorNombreLista');

		crearTarjeta.addEventListener("click", function(){
			//ocultando crearTarjeta
			crearTarjeta.style.display = "none";
			//crear un text area
			var tarjetaText = document.createElement("textarea");
			//agregando una id al textarea
			tarjetaText.setAttribute("id","txt");

			//crear un botón guardar
			var button = document.createElement("button");
			//agregando una id al botón
			button.setAttribute("id","btn");
			//creando texto del button
			var añadir = document.createTextNode("Añadir");
			//agregando nodo de texto al botón
			button.appendChild(añadir);

			//haciendo appendChild
			contenedorNombreLista.appendChild(tarjetaText);
			contenedorNombreLista.appendChild(button);

		})

	})
		

});

/*
//Creando evento de click para el botón guardar
	var btn = document.getElementById("btn");
	var nuevoDiv = document.getElementById("nuevo");

btn.addEventListener("click", function(){
	//creando un div para el nombreLista y texto con hipervinculo
	var contenedorNombreLista = document.createElement("div");
	//agregando id
	contenedorNombreLista.setAttribute("id","contenedorNombreLista");

	//rescatar datos ingresados por el usuario
	var nombreLista = document.getElementById('inpt').value;
	//guardando info en un textNode
	var nombreListaUsuario = document.createTextNode(nombreLista);
	//creando un texto con hipervinculo
	var tarjeta = document.createElement("a");
	//agregando atributo href
	tarjeta.setAttribute("href","#");
	//creando texto de tarjeta
	var textoTarjeta = document.createTextNode("Añadir tarjeta");
	//añadiendo texto a tarjeta
	tarjeta.appendChild(textoTarjeta);

	//agregando nombreLista y a
	padre.replaceChild(contenedorNombreLista, nuevoDiv);
	//agregando nombr lista
	contenedorNombreLista.appendChild(nombreListaUsuario);
	//agregando tarjeta
	contenedorNombreLista.appendChild(tarjeta);

});*/

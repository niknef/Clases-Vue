//OPCION 1
function enviar_nombre(){
	var pepe= document.querySelector("#nombre").value;
		localStorage.setItem ("dato", pepe);
	var mostrar =document.querySelector("#mostrar")
	var dato_recuperado_local = localStorage.getItem ("dato");
	this.nombre.value=""

 mostrar.innerHTML = dato_recuperado_local;
}
/*
//Opcion 2 
function enviar_nombre(){
	var nombre= document.querySelector("#nombre").value;
		localStorage["nombre"] =nombre;
	var mostrar =document.querySelector("#mostrar")
	var dato_recuperado_local = localStorage["nombre"];

 mostrar.innerHTML = dato_recuperado_local;
}


//Opcion 3
function enviar_nombre(){

	var nombre= document.querySelector("#nombre").value;
		localStorage.nombre =nombre;
	var mostrar =document.querySelector("#mostrar")
	var dato_recuperado_local = localStorage.nombre;

 mostrar.innerHTML = dato_recuperado_local;
}
	
*/	
	

	



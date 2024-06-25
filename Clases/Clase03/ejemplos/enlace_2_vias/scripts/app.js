
var app= new Vue({
	el: ".contenedor",
	data: {
		mensaje: "hola",
		lista:[]

		}, //fin data

		methods:{
			agregar:function(){
				this.lista.push(this.mensaje);
				this.mensaje="";
			},
			borrar:function(index){
				this.lista.splice(index,1)
			},
			editar:function(){
				//codigo de editar

			}


		}

				
				





})







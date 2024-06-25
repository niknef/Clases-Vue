
var app= new Vue({
	el: ".contenedor",
	data: {
		pendientes:"tareas pendientes",
		mensaje:"",
		lista:[],
		total:0,
		verificar:true,
		sumarTerminadas:0
		}, //fin data

		methods:{
			agregar:function(){
				if(this.mensaje ==""){
					this.verificar = false
				}else{
					this.verificar = true
				this.lista.push({
					mensaje: this.mensaje,
					cssa: 'pendientes'
				});
				this.mensaje="";
				this.total= this.lista.length;
				}
			},
			borrar:function(index){
				if(this.lista[index].cssa == 'terminadas'){
					this.sumarTerminadas --;
				}
				this.lista.splice(index,1)
				this.total --;
				

			},
			toggle:function(index){
				if(this.lista[index].cssa == "pendientes"){
					this.sumarTerminadas ++;
 				 			this.lista[index].cssa = 'terminadas'
 				 		}else{
 				 			this.sumarTerminadas --;
 				 			this.lista[index].cssa = 'pendientes'
 				 		}
 			},

 		},
 		filters: {
  				mayuscula: function (value) {
    				if (!value) return ''
    				value = value.toString()
    					return value.charAt(0).toUpperCase() + value.slice(1)
  				}
			}
})







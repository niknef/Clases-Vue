//Creamos nuestro componente Primer encabezado
Vue.component("primer-encabezado",{
    //Agregamos la props pendientes
    props: ['pendientes'],
    //Agregamos el template
    template:`<div>
				<h1 class="my-4">{{pendientes | capitalize}}</h1>
			</div>`,
});

//Creamos nuestro componente Formulario
Vue.component("form-datos",{
    //Creamos un data con una function que retorna un objeto con el mensaje, la lista, el total y verificar
    data: function(){
        
        return{
            mensaje:"",
		    lista:[],
		    total:0,
		    verificar:true,
		    sumarTerminadas:0
        }
    
    },
    //creamos nuestro template
    template:`
	<div>
            <form v-on:submit.prevent>
            
                <input type ="text" v-model="mensaje" @keyup.13="agregar" :class="verificar ? 'border-succes' : 'border-danger'" >
            
            </form>
        
            <div :class="verificar ? 'classBien' : 'classError'">
                
                <p>No puede quedar vacío</p> 
            
            </div>
                
        
            <ul> 
            
                <li v-for="(item, index) in lista" :key="index" :class="item.css" >
                
                    <span @click="toggle(index)">{{item.mensaje | capitalize}}, indice: {{index}}</span>
                 
                    <button class="btn btn-danger" @click="borrar(index)">Borrar</button>
             
                </li>
       
            </ul>
                
            <div class="row">        
            
            
                <p> Datos Ingresados: {{total}}</p>
                
            
                <p> Terminadas : {{sumarTerminadas}}</p>
        
            </div>

                
       
    </div>
	`,
    //agregamos los metodos
    methods:{
        //creamos el metodo agregar
        agregar:function(){
            //si el mensaje esta vacio verificar sera false
            if(this.mensaje ==""){
                this.verificar = false
            }else{
                this.verificar = true
            //si no esta vacio se agregara a la lista    
            this.lista.push({
                mensaje: this.mensaje,
                css: 'pendientes'
            });
            //se limpiara el mensaje
            this.mensaje="";
            //le damos valor al total viendo la cantidad de items en la lista
            this.total= this.lista.length;
            }
        },
        //creamos el metodo toggle
        toggle:function(index){
            //si el css es pendientes se cambiara a terminadas y se sumara uno a sumarTerminadas
            if(this.lista[index].css == "pendientes"){
                this.sumarTerminadas ++;
                this.lista[index].css = 'terminadas'
            }else{
                this.sumarTerminadas --;
                this.lista[index].css = 'pendientes'
            }
        },
        //creamos el metodo borrar
        borrar:function(index){
            if(this.lista[index].css == 'terminadas'){
                this.sumarTerminadas --;
            }
            this.lista.splice(index,1)
            this.total --;
        },
    }

});

var app= new Vue({
	el: ".contenedor",
	data: {
		pendientes:"tareas pendientes",
		},
		//fin data
})//fin instancia root







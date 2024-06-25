//Primero ser registra el componente

//COMPONENTE CON TEMPLATE DE COMILLAS SIMPLES O DOBLES

Vue.component('mi-componente', {
  data:function(){
    return {
      saludo:"Hola Chicos",

    }

  },
   template:'<div><h1>Esto es un mensaje desde un componente </h1><p>{{saludo}}</p></div>',


});

//COMPONENTE CON TEMPLATE COMILLAS OBLIQUAS
Vue.component('template-string', {
	data:function(){
		return {
			dato:"Texto del componente template String"
			}
		},

	template:`
          <div>
             <h1>{{dato}}</h1>
             <p>Mas texto</p>
	       </div>
         `

});


Vue.component('btn-contador', {
 data: function () {
    return {
      sumar: 0,
      texto:"Resultado"

      }
  },
    template: `<div>
          			<p>Este es el  --> {{texto}} : {{ sumar }}</p>
        	 				<button v-on:click="sumar++">Dale Sumar !</button>
        	 				<button v-on:click="sumar--">Dale restar !</button>
  	 			     </div>`,

    methods:{
      sumardato:function(){
        //codigo con lo que hace el guardar
      },
      restardato:function(){
        //codigo para editar..
      }

    }

    
 })

//Se declara la instancia
var app= new Vue({
	el: ".contenedor",
  data:{
    titulo:"hola"



  }
})





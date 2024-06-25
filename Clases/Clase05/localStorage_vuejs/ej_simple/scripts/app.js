//REGISTRAR EL COMPONENTE FORM-DATO
Vue.component('form-dato', {
	data:function(){
		return {
			dato:"",
      mostrar_local:""
			}
		},

	template:`<div class="form-data">
				      <h1>LocalStorage con Vuejs</h1>
              <form @submit.prevent>
                <input type="text" v-model= "dato" />
                  <button @click="guardar(dato)">Guardar</button>
              </form>
                  <mostrar-dato v-bind:mostrar_local="mostrar_local">
                    
                  </mostrar-dato>

			     </div>`,

  methods:{
    guardar(dato){
      localStorage.setItem("local", dato)
     // this.mostrar_local= localStorage.local
      this.mostrar_local= localStorage.getItem("local")

      this.dato=""
    }
}

}) // fin componente form-dato

//REGISTRO DEL COMPONENTE MOSTRAR-DATO
Vue.component("mostrar-dato", {
    props:["mostrar_local"],
    template: `
            <div class="ver"> <h1>Dato ingresado</h1>
                <p> {{mostrar_local}}</p>

            </div>`
})
//CREAMOS LA INSTANCIA ROOT O PRINCIPAL DE VUE
var app= new Vue({
	el: ".contenedor",
  data:{
    nuevo_dato:"", //NO HACE NADA
  },

 })





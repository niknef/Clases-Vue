//REGISTRO DEL COMPONENTE FORM-DATO -PADRE DEL COMPONENTE MOSTRAR-DATO Y PASA ARR PARA SU HIJO POR PROPS
Vue.component("form-dato", {
  data: function () {
    return {
      dato: {
        nom: "",
        ap: "",
        tel: "",
      },
      arr: [],
    };
  },

  template: `<div class="form-data rounded my-4">
				      <h1>LocalStorage con Vuejs</h1>
              <form @submit.prevent class="formulario-data my-3">
                <div>
                  <label>Nombre</label>
                    <input type="text" v-model= "dato.nom" />
                </div>
                <div>
                  <label>Apellido</label>
                    <input type="text" v-model= "dato.ap" />
                </div>
                <div>
                <label>Teléfono</label>
                  <input type="tel" v-model= "dato.tel" />
                </div>
                  
                  <button class="guardar" @click="guardar(dato)">Guardar</button>
                  <button class='guardar' @click="limpiar(arr)">Limpiar</button>
              </form>
                  <mostrar-dato v-bind:arr ="this.arr"></mostrar-dato>
                 

			     </div>`,

  methods: {
    guardar(dato) {
      console.log(dato);
      if (!localStorage.local) {
        this.arr = [];
      } else {
        this.arr = JSON.parse(localStorage.getItem("local"));
      }

      this.arr.push(dato);
      localStorage.setItem("local", JSON.stringify(this.arr));

      this.dato = { nom: "", ap: "", tel: "" };
    },
    limpiar(arr) {
      if (localStorage.local) {
        localStorage.clear();
        this.arr = [];
      }
    },
  },
});
//REGISTRO DEL COMPONENTE MOSTRAR-DATO- HIJO QUE RECIBE POR PROPS ARR
Vue.component("mostrar-dato", {
    props:["arr"],
    template: `
            <div class="ver rounded" > <h1>Datos ingresados</h1>
                <p v-for="x in arr">{{x.nom}}: {{x.ap}}: {{x.tel}}</p>
            </div>`,

 })

//CREACION DE LA INSTANCIA ROOT DE VUE
var app= new Vue({
	el: ".contenedor",
  data:{
    
  }
 })

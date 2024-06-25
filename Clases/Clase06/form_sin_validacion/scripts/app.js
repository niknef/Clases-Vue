Vue.component('mi-form', {
	data:function(){
		return {
			form_data:{
				titulo:"",
				comentario:"",
				selected:[],
				anio:""
				},
		arr:[]
		}

	},
template:`<div class="form">
		<form v-on:submit.prevent>

		<label>Título</label>
			<input type="text" v-model="form_data.titulo"  placeholder="Ingrese Titulo"/>

		<label>Resumen</label>
				<textarea v-model="form_data.comentario"></textarea>

		<label>Consola</label>

		<select v-model="form_data.selected" multiple size="4">
			
 			<option>PC</option>
  			<option>Play 2</option>
  			<option>Play 3</option>
  			<option>Play 4</option>
		</select>
		
		<label>Lanzamiento</label>
		<input v-model.number="form_data.anio" type="number">


		<button @click="guardar(form_data)">Guardar</button>
		

		</form>
		<div>
			<h2>Datos</h2>
				<ul>
					<li v-for="item in arr">
					{{item.titulo}}, {{item.comentario}}, 
					<span v-for="x in item.selected">{{x}}, </span>,{{item.anio}}</li>
				</ul>
		</div>

	</div>`,
methods:{
	guardar:function(form_data){
	
	console.log(typeof this.form_data.anio)
		
	if(!localStorage.dato){
			this.arr=[]
		}else{
			this.arr=JSON.parse(localStorage.getItem("dato"))
			}

	this.arr.push(form_data)
	localStorage.setItem("dato",JSON.stringify(this.arr))

	console.log(this.arr)
}
}

});

var app= new Vue({
	el: ".contenedor"
			
	



})





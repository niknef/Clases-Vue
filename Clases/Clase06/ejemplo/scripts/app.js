Vue.component('mi-componente', {
	data:function(){
		return {
			form_data:{
				titulo:"",
				comentario:"",
				edad:"",
				check:"",
				selected:"",
				elegido:"A",
				color:"",
				nombres:[],
				sw:"pepe"
				
				},
		arr:[],
		options:[
				{texto: 'Uno', dato: 'A', disabled:false },
      			{texto: 'Dos', dato: 'B', disabled:false },
      			{texto: 'Tres', dato: 'C', disabled:false }
   				],
   		
		}


	},
template:`<div class="form">
		<form v-on:submit.prevent>
		<label>Titulo</label>
			<input type="text" v-model.lazy="form_data.titulo"/>
			<p>Valor de titulo: {{form_data.titulo}} </p>

		<label>Comentario</label>
				<textarea v-model.trim.lazy="form_data.comentario"></textarea>
				<p>Cant caract. sin espacios (inicio-fin): {{form_data.comentario.length}} valor:{{form_data.comentario}}</p>

		<label>Edad</label>
 			 <input type="number" v-model.number="form_data.edad" />
 			 <p>Valor de edad {{form_data.edad}}, type: {{typeof(form_data.edad)}}</p>

		<label>Valor del Ckeckbox: {{form_data.check}}
			<input type="checkbox" id="checkbox" v-model="form_data.check">
		</label>

		<label>Seleccionar: {{form_data.selected}}</label>
		<select v-model="form_data.selected">
		 <option value="" disabled>Seleccionar herramienta</option>
 			<option value="martillo">Martillo</option>
  			<option>Pinza</option>
  			<option>Tuerca</option>
		</select>

		<label>Seleccionado: {{form_data.elegido}}</label>
		<select v-model="form_data.elegido">
			<option v-for="item in options" v-bind:value="item.dato">
   				 {{item.texto}}
  			</option>
		</select>
		

		<!--<span>Nombres: {{form_data.nombres}}</span>-->
		<span v-for="item in form_data.nombres">{{item}}</span>
		<label>Pepe
		 	<input type="checkbox" value="Pepe" v-model="form_data.nombres">
  		</label>
  	
  		<label>Thor
  			<input type="checkbox" value="Thor" v-model="form_data.nombres">
  		</label>
  			
  		<label>Randy
  			<input type="checkbox" value="Randy" v-model="form_data.nombres">
  		</label>
  			
  		<p>Eligió:{{form_data.color}}</p>
		<label>Negro
  			<input type="radio" value="Gris" v-model="form_data.color">
		</label>
		<label>Blanco
			<input type="radio" value="Rojo" v-model="form_data.color">
		</label>

		<label>Valor :{{form_data.sw}}</label>
			<input type="checkbox"  v-model="form_data.sw"  true-value="pepe" false-value="no" checked/>
			<!-- No toma el atributo checked si tiene los atributos true-value o false value. Obligatoriamente, la variable debe inicializarse con valor true.
			En caso de usar los atributos true-value o false value debe coincidir con el valor inicializado del true-value-->
						
		<input type="submit" value="Guardar"/>
		

		</form>

	</div>`,


});

var app= new Vue({
	el: ".contenedor"
})





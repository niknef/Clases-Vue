//Primero ser registra el componente

Vue.component('componente-props',{
	data:function(){
		return {
			edad: 24,
			}
	},
	props:['nombre' , 'apellido'], //atributo que recibe de la instancia raiz
	template: `<div><h1>Este es el nombre:
		{{nombre | mayuscula}}  y su apellido {{apellido}}: Esta es la edad {{edad }}</h1></div>`
	
})

Vue.component('componente-multilinea', {
	props:['titulo', 'texto', 'img', 'id', 'alt'],
   	template: `
     <div class="articulos">
       	
       	<h1>{{titulo | mayuscula}}</h1>
      		
      		<div class="d">
      				<p>{{texto}}</p>
		       		<img v-bind:src="img" v-bind:alt="alt"/>
       		</div>
     </div>

   `,
   
})

Vue.filter('mayuscula', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})//filtro que se aplicará a cualquier componente 

//Se declara la instancia
var app= new Vue({
	el: ".contenedor",
	data: {
			articulos: [ //se pasará al componente por props
		      { id: 1, 
		      	titulo: 'jardin floreciente en otoño',
		      	favorito: true, 
		      	texto:"Plantas que florecen en otoño de varios colores, super resistentes como el Crisantemo, Zinnia, Geranio, nos ofrecen variados colores para alegrar la casa",
		      	img:'img/jardin_otono.jpg',
		      	alt:"Flores en otoño en el jardin"
		      },
		      { id: 2,
		      	titulo: 'suculentas y su cambio de color', 
		      	favorito: true,
		      	texto:"Las suculentas que suelen cambiar de color dependen fundamentalmente del clima y el strees a la cual se somete a la planta. Factores como el grado de luz, frío o calor puede afectar su color, tal es el caso del Aeonium, las Echeverias, también algunos cactus.",
		      	img:"img/suculentas.jpg",
		      	alt:"Suculentas estresadas"
		      },
		      { id: 3,
		      	titulo: 'jardines verticales', 
		      	favorito: true,
		      	texto:"La tendencia en medio de la pandemia es buscar verde y sol para tratar de sobrevellar el encierro. Para aquellos que no tienen suficiente espacio, la opción vertical es una gran opción para disfrutar",
		      	img: "img/vertical.jpg",
		      	alt:"Jardin vertical"
		      },
		      { id: 4, 
		      	titulo: 'macetas de cerámica', 
		      	favorito: false, 
		      	texto: "Siempre pensando que no hay nada más lindo que ver una planta saludable, las posibilidades que nos ofrecen los distintos tipos de macetas y estilos, nos permiten elegir una temática particular, acorde a nuestro gusto.",
		      	img:"img/macetas.jpg",
		      	alt:"Macetas de cerámica"
		      	}
    			], 

    			libros:[
    			  { id: 4, 
		      	titulo: 'macetas de cerámica', 
		      	favorito: true, 
		      	texto: "Siempre pensando que no hay nada más lindo que ver una planta saludable, las posibilidades que nos ofrecen los distintos tipos de macetas y estilos, nos permiten elegir una temática particular, acorde a nuestro gusto.",
		      	img:"img/macetas.jpg",
		      	alt:"Macetas de cerámica"
		      	}
    			],
    		
    			nombre:"pepe", //propiedad que pasara a componente
    			apellido:"perez"
			
	}



})





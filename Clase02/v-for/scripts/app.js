
var app= new Vue({
	el: "#contenedor",
	data: {
			peliculas:[
				"Civil War",
				"Sherlock Holmes",
				"Kung Fusion"
			],
			juegos:[
				{nombre: "Super Mario Bros", anio: 1986, portada:"img/super_mario.jpg", alt:"Super Mario Bros Primer juego",
					calificacion:8},
				{nombre: "Mortal Kombat", anio: 1993, portada:"img/mk2.jpg" , alt:"Mortal Kombat 2", calificacion:9},
				{nombre: "Street Fighter", anio :1987, portada:"img/sf2.jpg", alt:"Street Figther",	calificacion:7}
			],
			obj: {
				animal: "gato", raza: "Persa", edad:4
			},
			lista:[
				{tarea: "Comprar más plantas", id:1, estado: false}, 
				{tarea: "Ir a la ferretería", id:2, estado: false},
				{tarea: "Limpiar la cocina", id: 3, estado: true},
				{tarea: "Hacer bici", id:4, estado: true}
			],

			datos_complejos:[
				{	tarea: "Ir al vivero", 
					id:1, 
					estado: false, 
					elementos:["suculentas ", "colgantes ", "aromáticas "]
				},
				{tarea: "Lectura", id:2, estado: false, elementos:["Mr.Mercedes ", "Dr.Sueño ", "It "]},

			],

			estructuras_objetos:[
				{tarea: "Ir al vivero", id:1, estado: false, 
					elementos:[
						{nombre:"suculentas", cantidad: 4, tamanio:"mediano"}, 
						{nombre: "colgantes", cantidad:10, tamanio:"grandes"},
					]
				},

			],


			
		}//cierre data
})



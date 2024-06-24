var app = new Vue({
    el: ".contenedor",
    data: {
        menu:[
            { link: 'retro', clase: 'activa' },
            { link: 'arcade', clase: 'noactiva' },
            { link: 'tendencia', clase: 'noactiva' }
        ],
        categoriaActiva: 'retro', // Inicialmente, la categoría activa es 'retro',

        games:[
			{
				nombre:"war of gods", 
				consola:["play 2 ", "play 3 ", "play 4 "],
				anio:1996, 
				clase:'noamo'
			},
			{
				nombre:"super mario 3d world", 
				consola: ["nintendo ", "wii ", "switch "],
				anio:2021, 
				clase:'noamo'
			},
			{
				nombre:"resident evil", 
				consola: ["play 2 ", "play 3 "],
				anio:1996, 
				clase:'noamo'
			},
			{
				nombre:"prehistorik", 
				consola : "pc, dos",
				anio:1993, 
				clase:'noamo'},
			{
				nombre:"among us", 
				consola : "pc", 
				anio:2018, 
				clase:'noamo'
			},
			{
				nombre:"fall guys", 
				consola :[ "pc ", "play 4 "], 
				anio:2020,
				clase:'noamo'}

		],
        
        jueguito:"",
    },
    methods: {
        // Método para cambiar la clase activa
        activo: function(index) {
            // Cambia la clase de todos los elementos a 'noactiva'
            this.menu.forEach((item, i) => {
                item.clase = (i === index) ? 'activa' : 'noactiva';
            });
            // Actualizar la categoría activa
            this.categoriaActiva = this.menu[index].link;
        },
        guardar:function(){
            // Añadir el nuevo juego al array games
            this.games.push({
                nombre: this.jueguito,// El nombre del juego es lo que se ha ingresado
				clase: 'noamo',// Clase predeterminada para el nuevo juego
				anio:1990 // Año predeterminado
            });
            // Limpiar el campo de entrada
            this.jueguito="";
        },
         // Método para alternar la clase de favorito/no favorito
        preferido:function(index){
            if(this.games[index].clase == "noamo"){
                this.games[index].clase = 'amo'
                  }else{
                      this.games[index].clase = 'noamo'
                  }		
         }
    }
});

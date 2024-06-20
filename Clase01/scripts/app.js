var app = new Vue({
    el: ".mostrar",
    data: {
        titulo:"Soy el titulo",
        mensajito:"Dato Dinamico",
        imagen: "img/imagen.jpg",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        descripcion: "Lorem ipsum dolor sit amet",
        esRojo: true,
        mal: 'malClass',
        error: 'errorClass',
        ver: false,
        booleano: false,
        codigo: "<h1>Escrito con etiquetas html se usa v-html</h1>"
    }
});
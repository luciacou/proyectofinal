//Para emular un gestor de contenido dinámico, generé ciertos objetos con arrays asociativos que contienen la data de cada uno de los proyectos.
//En el html agregué los atributos data-element, en los cuales se espera recibir este contenido dinámico.
// Con javascript obtuve toda la lista de elementos que van a recibir datos del html, preguntando que encuentre todos los atributos que tienen data-element. 
//Obtengo todos las etiquetas html que van a recibir contenido dinámico. 
//En la URL recibo un parámetro que se llama "page" que va a indicar qué contenido va a cargar. 
//Si esa página está correctamente definida, se iteran todos los elementos que tienen el atributo "data-element" y cada uno de esos carga el contenido adentro.
//Una vez que itero, pregunto a través del switch cuál es el valor del atributo que se está viendo y cargo la data que se encuentran en el array.

var contenido = [];
var branding =  { 
                    nombre: "Branding", 
                    descripcion: "Los siguientes proyectos fueron creados para las materias Manejo Tipográfico y Diseño de Marcas y Logos",
                    siguiente_nombre: "Dibujos",
                    siguiente_link: "proyectos.html?page=dibujos",
                    proyecto_uno_nombre: "Avenir",
                    proyecto_uno_descripcion: "A partir de la elección de una fuente tipográfica, en este caso Avenir (una sans-serif que expresa modernidad, simpleza y liviandad), el objetivo era crear la etiqueta de una botella de vino. La fuente no solo tenía que verse representada en la etiqueta sino también en la cepa del vino. <br> Para mi fuente utilicé Malbec ya que quería dirigir mi vino a un público joven y esta cepa generalmente se elige paralos asados debido a su buena combinación con las carnes.",
                    proyecto_uno_imagen: "img/wine1.png",
                    proyecto_uno_imagenes_uno: "img/VinoIndependiente.png",
                    proyecto_uno_imagenes_dos: "img/wine2.png",
                    proyecto_uno_imagenes_tres: "img/winepackfull.png",
                    proyecto_dos_nombre: "Los Alpes",
                    proyecto_dos_descripcion: "Para la materia Diseño de Marcas y Logos, teníamos que elegir una marca real (podía ser una empresa u organización) y rediseñar su identidad. <br> En mi caso, trabajé con la Panadería y Confitería Los Alpes, ubicada en el barrio de Palermo. <br><br> El proceso comenzó con una etapa de investigación y conocimiento de los productos, los dueños, el local y su entorno. A partir de eso, se estableció un objetivo principal el cual se basaba en crear algo totalmente nuevo pero sin dejar atrás la esencia de la panadería. <br><br> Fue de esta forma que el logo fusionó el concepto característico de su nombre (los Alpes, hacen referencia al origen italiano de los dueños) y la herramienta principal con la que elaboran sus productos más destacados, la manga de decoración.",
                    proyecto_dos_imagen: "img/los-alpes-1.png",
                    proyecto_dos_imagenes_uno: "img/logoviejo.png",
                    proyecto_dos_imagenes_dos: "img/logonuevo.png",
                    proyecto_dos_imagenes_tres: "img/los-alpes-2.png",

                };

var dibujos =  { 
                    nombre: "Dibujos", 
                    descripcion: "Estos proyectos se dividen en dos, uno para la materia Photoshop y el otro son dibujos que hice como hobby.",
                    siguiente_nombre: "Editorial",
                    siguiente_link: "proyectos.html?page=editorial",
                    proyecto_uno_nombre: "Toy Story",
                    proyecto_uno_descripcion: "Para esta materia, el requisito era que cada alumno creara un afiche de la película con al menos dos personajes de la historia. <br><br> Utilizando la imagen real como referencia y con tal solo las herramientas de pluma y pincel de Photoshop, los colores, las formas y las sombras generaron un Woody pixelar parecido al original.",
                    proyecto_uno_imagen: "img/woodypart.png",
                    proyecto_uno_imagenes_uno: "img/woodyreal.png",
                    proyecto_uno_imagenes_dos: "img/woodybig.png",
                    proyecto_uno_imagenes_tres: "img/woody-video.gif",
                    proyecto_dos_nombre: "Líneas",
                    proyecto_dos_descripcion: "Hace unos años, en mi tiempo libre, solía dibujar en un cuaderno escenas de películas y bandas o cantantes. <br><br> El proceso comenzaba con tomar una imagen original, dividir en ella las luces y sombras, y a partir de allí otorgarle color y líneas a cada zona.",
                    proyecto_dos_imagen: "img/janis.png",
                    proyecto_dos_imagenes_uno: "img/freddie.png",
                    proyecto_dos_imagenes_dos: "img/oasis.png",
                    proyecto_dos_imagenes_tres: "img/jack.png",

                };

var editorial =  { 
                    nombre: "Editorial", 
                    descripcion: "Los proyectos que están a continuación fueron realizados para la materia Diseño Editorial y Publicitario.",
                    siguiente_nombre: "Web",
                    siguiente_link: "proyectos.html?page=web",
                    proyecto_uno_nombre: "La Naranja Mecánica",
                    proyecto_uno_descripcion: "A partir de varios artículos creados por periodistas y especialistas de cine acerca de la película de Stanley Kubrick, La Naranja Mecánica, se creó un pequeño libro que contiene secciones que hablan desde el guión hasta la esconografía de la película. <br><br> Acompañado de imágenes que ayudan al lector a tener una referencia visual rápida de la película, el libro es tiene un contenido simple y sencillo el cual se puede ver reflejado no solo en su interior sino también en su tapa.",
                    proyecto_uno_imagen: "img/close-orange.png",
                    proyecto_uno_imagenes_uno: "img/open-orange-full.png",
                    proyecto_uno_imagenes_dos: "img/open-orange.png",
                    proyecto_uno_imagenes_tres: "img/varios-orange.png",
                    proyecto_dos_nombre: "Can anybody find me somebody to love?",
                    proyecto_dos_descripcion: "Tomando como base el libro de la periodista Lesley-Ann Jones en el que relata ciertos momentos importantes en la vida de Freddie Mercury, se diseñó una tapa que reflejara los altos y bajos de la vida del cantante. <br><br> Los contrastes en la vida de Freddie Mercury se puede ver no solo en la ilustración (su corona y su vida brillante, y por otro lado su interior con angustia), sino también en el background del libro mostrando la dualidad de los colores fundidos en un suave degradado.",
                    proyecto_dos_imagen: "img/single-freddie.png",
                    proyecto_dos_imagenes_uno: "img/open-freddie.png",
                    proyecto_dos_imagenes_dos: "img/open-front-freddie.png",
                    proyecto_dos_imagenes_tres: "img/varios-freddie.png",

                };

var web =  { 
                    nombre: "Web", 
                    descripcion: "Los siguientes trabajos fueron realizados como obligatorios para Diseño Web 2 y Programación 1.",
                    siguiente_nombre: "Branding",
                    siguiente_link: "proyectos.html?page=branding",
                    proyecto_uno_nombre: "Aretha Franklin",
                    proyecto_uno_descripcion: "La consigna de este proyecto era maquetar un diseño realizado por el profesor con los lenguajes de html y css. Decidí cambiar el diseño original (Los Elefantes) para este porfolio para darle un aspecto distinto. <br><br> Este caso no tiene una versión responsive, ya que el objetivo del obligatorio era trabajar selectores avanzados, efectos, visibilidad en todos los browsers, etc.",
                    proyecto_uno_imagen: "img/aretha1.png",
                    proyecto_uno_imagenes_uno: "img/aretha2.png",
                    proyecto_uno_imagenes_dos: "img/aretha3.png",
                    proyecto_uno_imagenes_tres: "img/aretha-video.gif",
                    proyecto_dos_nombre: "uTesting",
                    proyecto_dos_descripcion: "uTesting surgió a partir de la consigna de crear un dashboard que utilizara además de html y css, javascript. <br><br> La plataforma sirve como herramienta de reporte para las personas que realizan QA Testing dentro de un equipo de Desarrollo, allí podrán: listar la cantidad y el tipo de errores por cliente, ver cómo funcionó cada sub-grupo dentro del equipo, establecer una lista de tareas, entre otros.",
                    proyecto_dos_imagen: "img/utesting.png",
                    proyecto_dos_imagenes_uno: "img/utesting-1.gif",
                    proyecto_dos_imagenes_dos: "img/utesting3.gif",
                    proyecto_dos_imagenes_tres: "img/utesting-2.gif",

                };

contenido["branding"] = branding;
contenido["dibujos"] = dibujos;
contenido["editorial"] = editorial;
contenido["web"] = web;

               
//https://gomakethings.com/how-to-get-the-value-of-a-querystring-with-native-javascript/
function GetParameter( field ) {
    var href = window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
};

$(document).ready(function () {

    var pagina = GetParameter("page");

    if(pagina != null){

        var data = contenido[pagina];

        if(data != null){

            var elementos = $(document).find("[data-element]");

            elementos.each(function () {

                var elemento = $(this);
                var atributo = elemento.attr("data-element");

                switch (atributo) {

                    case "background":
                        elemento.addClass("bkg-"+ pagina)
                        break;

                    case "page-name":
                        elemento.html(data.nombre);
                        break;

                    case "page-description":
                        elemento.html(data.descripcion);
                        break;

                    case "project-one-heading":
                        elemento.html(data.proyecto_uno_nombre);
                        break;

                    case "project-one-description":
                        elemento.html(data.proyecto_uno_descripcion);
                        break;

                    case "project-one-main-img":
                        elemento.attr("src", data.proyecto_uno_imagen);
                        break;

                    case "project-one-img-one":
                        elemento.attr("src", data.proyecto_uno_imagenes_uno);

                    break;

                    case "project-one-img-two":
                        elemento.attr("src", data.proyecto_uno_imagenes_dos);
                    
                    break;

                    case "project-one-img-three":
                        elemento.attr("src", data.proyecto_uno_imagenes_tres);

                    break;

                    
                    case "project-two-heading":
                        elemento.html(data.proyecto_dos_nombre);
                        break;

                    case "project-two-description":
                        elemento.html(data.proyecto_dos_descripcion);
                        break;

                    case "project-two-main-img":
                        elemento.attr("src", data.proyecto_dos_imagen);
                        break;

                    case "project-two-img-one":
                        elemento.attr("src", data.proyecto_dos_imagenes_uno);
                    break;

                    case "project-two-img-two":
                        elemento.attr("src", data.proyecto_dos_imagenes_dos);
                    break;

                    case "project-two-img-three":
                        elemento.attr("src", data.proyecto_dos_imagenes_tres );
                    break;

                    case "bkg-siguiente":
                        elemento.addClass("bkg-" + data.siguiente_nombre.toLowerCase());
                    break;

                    case "siguiente":

                        elemento.html(data.siguiente_nombre);
                        elemento.parent().attr("href", data.siguiente_link);
                        
                        break;
                
                    default:
                        break;
                }

            });
        }
    }
    
});
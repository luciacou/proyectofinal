
var contenido = [];
var branding =  { 
                    nombre: "Branding", 
                    descripcion: "Los siguientes proyectos fueron creados según los requisitios de cada una de las materias, ninguno de estos casos fue aplicado a un cliente real.",
                    siguiente_nombre: "Dibujos",
                    siguiente_link: "proyectos.html?page=dibujos",
                    proyecto_uno_nombre: "Nombre del proyecto",
                    proyecto_uno_descripcion: "Sarassa",
                    proyecto_uno_imagen: "urldelaimagen",
                    proyecto_uno_imagenes_uno: "urldelaimagen",
                    proyecto_uno_imagenes_dos: "urldelaimagen",
                    proyecto_uno_imagenes_tres: "urldelaimagen",
                    proyecto_dos_nombre: "Nombre del proyecto",
                    proyecto_dos_descripcion: "Sarassa",
                    proyecto_dos_imagen: "urldelaimagen",
                    proyecto_dos_imagenes_uno: "urldelaimagen",
                    proyecto_dos_imagenes_dos: "urldelaimagen",
                    proyecto_dos_imagenes_tres: "urldelaimagen",

                };

var dibujos =  { 
                    nombre: "Dibujos", 
                    descripcion: "Los siguientes proyectos fueron creados según los requisitios de cada una de las materias, ninguno de estos casos fue aplicado a un cliente real.",
                    siguiente_nombre: "Editorial",
                    siguiente_link: "proyectos.html?page=editorial",
                    proyecto_uno_nombre: "Nombre del proyecto",
                    proyecto_uno_descripcion: "Sarassa",
                    proyecto_uno_imagen: "urldelaimagen",
                    proyecto_uno_imagenes_uno: "urldelaimagen",
                    proyecto_uno_imagenes_dos: "urldelaimagen",
                    proyecto_uno_imagenes_tres: "urldelaimagen",
                    proyecto_dos_nombre: "Nombre del proyecto",
                    proyecto_dos_descripcion: "Sarassa",
                    proyecto_dos_imagen: "urldelaimagen",
                    proyecto_dos_imagenes_uno: "urldelaimagen",
                    proyecto_dos_imagenes_dos: "urldelaimagen",
                    proyecto_dos_imagenes_tres: "urldelaimagen",

                };

var editorial =  { 
                    nombre: "Editorial", 
                    descripcion: "Los siguientes proyectos fueron creados según los requisitios de cada una de las materias, ninguno de estos casos fue aplicado a un cliente real.",
                    siguiente_nombre: "Web",
                    siguiente_link: "proyectos.html?page=web",
                    proyecto_uno_nombre: "Nombre del proyecto",
                    proyecto_uno_descripcion: "Sarassa",
                    proyecto_uno_imagen: "urldelaimagen",
                    proyecto_uno_imagenes_uno: "urldelaimagen",
                    proyecto_uno_imagenes_dos: "urldelaimagen",
                    proyecto_uno_imagenes_tres: "urldelaimagen",
                    proyecto_dos_nombre: "Nombre del proyecto",
                    proyecto_dos_descripcion: "Sarassa",
                    proyecto_dos_imagen: "urldelaimagen",
                    proyecto_dos_imagenes_uno: "urldelaimagen",
                    proyecto_dos_imagenes_dos: "urldelaimagen",
                    proyecto_dos_imagenes_tres: "urldelaimagen",

                };

var web =  { 
                    nombre: "Web", 
                    descripcion: "Los siguientes proyectos fueron creados según los requisitios de cada una de las materias, ninguno de estos casos fue aplicado a un cliente real.",
                    siguiente_nombre: "Branding",
                    siguiente_link: "proyectos.html?page=branding",
                    proyecto_uno_nombre: "Nombre del proyecto",
                    proyecto_uno_descripcion: "Sarassa",
                    proyecto_uno_imagen: "urldelaimagen",
                    proyecto_uno_imagenes_uno: "urldelaimagen",
                    proyecto_uno_imagenes_dos: "urldelaimagen",
                    proyecto_uno_imagenes_tres: "urldelaimagen",
                    proyecto_dos_nombre: "Nombre del proyecto",
                    proyecto_dos_descripcion: "Sarassa",
                    proyecto_dos_imagen: "urldelaimagen",
                    proyecto_dos_imagenes_uno: "urldelaimagen",
                    proyecto_dos_imagenes_dos: "urldelaimagen",
                    proyecto_dos_imagenes_tres: "urldelaimagen",

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
                        elemento.html(data.proyecto_uno_imagen);
                        break;

                    case "project-one-img-one":
                        elemento.html(data.proyecto_uno_imagenes_uno);

                    break;

                    case "project-one-img-two":
                        elemento.html(data.proyecto_uno_imagenes_dos);
                    
                    break;

                    case "project-one-img-three":
                        elemento.html(data.proyecto_uno_imagenes_tres);

                    break;

                    
                    case "project-two-heading":
                        elemento.html(data.proyecto_dos_nombre);
                        break;

                    case "project-two-description":
                        elemento.html(data.proyecto_dos_descripcion);
                        break;

                    case "project-two-main-img":
                        elemento.html(data.proyecto_dos_imagen);
                        break;

                    case "project-two-img-one":
                        elemento.html(data.proyecto_dos_imagenes_uno);
                    break;

                    case "project-two-img-two":
                        elemento.html(data.proyecto_dos_imagenes_dos);
                    break;

                    case "project-two-img-three":
                        elemento.html(data.proyecto_dos_imagenes_tres );
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
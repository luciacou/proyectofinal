  $(document).ready(inicio);

//Variables globales para que sean llamadas cada vez que una función lo necesite.

var nombreProjecto = ["Branding", "Dibujos", "Editorial", "Web"];

var dataTeam = [
  ["Sofía Rodríguez", "UX-Developer", "Funcionalidad"],
  ["Juan Pérez", "Web Developer", "Código"]
];

var allUsers = {
  "Pepito González": "1234",
  "María Gómez": "5678",
  "Felipe Méndez": "1357",
  "Laura Rodríguez": "2468"
};

var clients = [
  "Adidas",
  "Petrobras",
  "Canarias",
  "Santander",
  "Conaprole",
  "Movistar"
];

var hours = [2, 56, 43, 7, 72, 48];

function inicio() {
  /*Dentro de la función inicio hay un switch en el que declaro que cada vez que el 
  contenido de la etiqueta <head> cambie, se ejecute un bloque de código distinto. 
  Para esto, nombré cada tab del Dashboard de forma diferente.
  (Esto fue porque tuve problemas con los plugins, si ejecutaba todos en la misma función, se rompía el código).
      https://www.w3schools.com/jsref/jsref_switch.asp*/

  switch ($("head title").text()) {
    case "uTesting: Login":
      validateLogin();

      break;

    case "uTesting: Dashboard":
      thisModal();
      chartDona();
      crearGrafica();
      slider();
      $("#to-doList").on("click", toDoListAppears);
      workingTable();
      chargeTableDashboard();

      break;

    case "uTesting: Equipos":
      chargeTable();
      thisModal();

      $(".addClient").on("click", addRowClient);

      $(".addTeam").on("click", addRowTeam);

      break;

    case "uTesting: Mis datos":
      $(".button-form").on("click", sendForm);
      thisModal();

      break;

    default:
      break;
  }
}

/*LOGIN: validación de usuario. 1) Tomo el valor que ingresa en los input y los guardo en una variable. 
2) Declaro un array con la variable donde guardé el nombre de los usuarios y
       le digo que si es idéntica a su contraseña (declarado en la variable global), entonces el formulario se puede enviar a través del submit. 
       3) Si no es así, el usuario podrá ver un mensaje de error en el que le pedirá nuevamente su password. 
       4) Si esto no se cumple, entonces su usuario y password, no son correctos*/
function validateLogin() {
  $("input[type=button]").on("click", thisValidation);
}

function thisValidation() {
  var userName = $("input[type=text]").val();
  var userPassword = $("input[type=password]").val();

  if (allUsers[userName]) {
    if (allUsers[userName] == userPassword) {
      $("form").submit();
    } else {
      $(".error-message").html(
        userName + " sabemos que sos vos, pero revisá de nuevo tu contraseña."
      );
    }
  } else {
    $(".error-message").html(
      "Ingresá tus datos nuevamente para entrar al mundo Narnia (mentira, revisá las mayúsculas y minúsculas)."
    );
  }
}

/*DASHBOARD_MODAL: cuando el usuario haga click en el botón de Logout, se ejecutará una función para que la modal aparezca. En la siguiente
función, cambio el valor del display que se encuentra en el css (antes, "none") y la reemplazo por block.*/

function thisModal() {
  $("li.modal-link a").on("click", function(event) {
    appearsModal();
  });

  function appearsModal() {
    $(".modal-logout").css("display", "block");
  }
}

/*DASHBOARD_CHARTDONA: según la documentación de Highcharts, solo agregué los datos para poblar los arrays dentro de "data".

PLUGIN: https://www.highcharts.com/demo/styled-mode-pie
*/

function chartDona() {
  Highcharts.chart("chart-dona", {
    title: {
      text: "Horas de implementación por equipo"
    },

    series: [
      {
        type: "pie",
        allowPointSelect: true,
        keys: ["name", "y", "selected", "sliced"],
        data: [
          ["Manuel, Pedro y Clara", 13, false],
          ["José, Paula y Tatiana", 21, false],
          ["Sofía, Juliana, Santiago", 6, false],
          ["Facundo, Mateo y Laura", 18, false],
          ["Soledad, Florencia y Pablo", 25, false]
        ],
        showInLegend: true
      }
    ]
  });
}

/*DASHBOARD_CREARGRÁFICA: 1) Realizó un "for" para que cuando empiece, la ejecución se realice a partir de la posición 0, que la condición sea
que la posición sea menos al largo total, y que cada vez que se haga un loop, se incremente el valor de la posición.
2) Declaro una variable en la que creo las barras y le agrego el valor de cada una, concatenando las horas según la posición en el array.
3) Adapto la altura del div a través del atributo css.
4) Le agrego animación para que las barras se completen de a una con cierto delay.
5) Declaro a qué corresponde cada una de las columnas según la posición del array "clients" y lo dejo debajo de las barras.
*/

function crearGrafica() {
  for (i = 0; i < clients.length; i++) {
    var chartBarra = $("<div><div></div><span>" + hours[i] + "h</span></div>");

    $("div", chartBarra).css({ height: "250px" });
    $("div", chartBarra)
      .delay(250 * i)
      .animate({ height: 150 - hours[i] }, { duration: 500 });
    chartBarra.append("<p>" + clients[i] + "</p>");
    $("#chart-barra").append(chartBarra);
  }
}

/*DASHBOARD_SLIDER: 1) Hago un array con todas las imágenes que van a estar en el slider. 2) Declaro que cada vez que el usuario haga click
en el botón manejador, se ejecutará la función slider, la cual evito que haga su funcionamiento por defecto.
2) Guardo en una variable el atributo "src" que corresponde a la etiqueta "img".
3) Hago una nueva variable para guardar el valor de la posición de cada "src" dentro de la array con las imágenes.
4) En la variable donde tengo el "src" le digo que a la posición que está dentro de la array, le sume una posición más.
5) Si la posición del array es menor o igual a cero, entonces agrego la clase "off" al manejador, sino retirar la clase (cambia el estilo del botón).
6) Si el botón donde clickeó el usuario es idéntico al atributo prev, entonces se le restará una posición del array.
7) Le agrego al atributo src, el nuevo valor de la posición del array.*/

function slider() {
  var arrayImg = [
    "img/siteOne.png",
    "img/siteTwo.png",
    "img/siteThree.jpg",
    "img/siteFour.jpg",
    "img/siteFive.png"
  ];

  $(".manejador").on("click", function(slider) {
    slider.preventDefault();

    var newSrc = $("img").attr("src");
    var indexArray = arrayImg.indexOf(newSrc);
    var newSrc = arrayImg[indexArray + 1];

    if (indexArray <= 0) {
      $(".manejador[href='prev']").addClass("off");
    } else {
      $(".manejador[href='prev']").removeClass("off");
    }

    if ($(this).attr("href") == "prev") {
      var newSrc = arrayImg[indexArray - 1];
    }

    $("img").attr("src", newSrc);
  });
}




/*DASHBOARD_LISTA: 
1) Cuando el usuario haga click en el botón, aparecerá la tabla (cambia el display none del css).
2) Declaro una función en la cual, cuando el usuario agregue datos a los input, y haga click en el botón "agregar" se creará un nuevo array.
3) Se agregarán dentro de ese array la opción que el usuario elija a través del campo select.
4) eclaro una variable "tr" en la que agrego etiquetas y concateno los valores dentro del array según su posición.
5) Dentro del id, agrego la variable tr.
6) Cuando se el usuario haga click en cada una de las filas, se ejecutará una nueva función.
7) Dependiendo de la fila que el usuario elija, se agregará y sacará la clase seleccionado. 
8) Cuando el usuario haga click en el botón de la bomba, se ejecutará la función borrar fila donde la clase seleccionado se borre, 
y así se elimine toda la fila */

function toDoListAppears() {
  {
    $("#to-do").css("display", "block");
  }
}



function workingTable() {
  $(".agregar").click(function() {
    var arrayDatos = [];

    $("input").each(function() {
      arrayDatos.push($(this).val());
    });

    arrayDatos.push($("select").val());
    var tr = $(
      "<tr><td>" +
        arrayDatos[0] +
        "</td><td>" +
        arrayDatos[1] +
        "</td><td>" +
        arrayDatos[2] +
        "</td></tr>"
    );

    $("#nuevosDatos").append(tr);

    tr.on("click", seleccionar);
  });

  function seleccionar() {
    $(this).toggleClass("seleccionado");
  }

  $(".boton").on("click", borrarFila);

  function borrarFila() {
    $(".seleccionado").remove();
  }
}



/*DASHBOARD_TABLA: 
1) Cada vez que el usuario haga click en una de las tabs, se ejecutarán dos funciones.
2) Se eliminará la clase active a los elementos que estén activos. 
3) Al tab que el usuario haya hecho click se le agregará y se le eliminará la clase activo
4) Declaro una variable para guardar dónde hizo click el usuario y le agrego el atributo.
5) Le agrego la clase disabled al contenido de los tabs.
6) Al id con el nombre de la tab, declarada en la variable en el punto 4, se le remueve la clase disabled, para que se muestre todo el contenido.*/

function chargeTableDashboard() {
  $("li[data-tab]").on("click", function(event) {
    var elemento = this;
    activarTab(elemento);
    showTab(elemento);
  });
}

function activarTab(elemento) {
  $(".active").removeClass("active");
  $(elemento).toggleClass("active");
}

function showTab(elemento) {
  var nombreTab = $(elemento).attr("data-tab");
  $("section.table-content div.tab-content").addClass("disabled");
  $("#" + nombreTab).removeClass("disabled");
}





/*EQUIPOS: 
1) Utilizo el plugin de https://datatables.net/ y le agrego a data, los valores correspondientes a cada tabla.
2) Ver la Tabla del Dashboard, para el cambio de tabs.
3) Declaro un función para agregar la información del cliente, la cuál se enviada a través del formulario de la última tab.
4) Tomo los valores del formulario del cliente y los guardo en variables. 
5) Guardo en un array todas las variables con los valores.
6) Según la documentación, llamo nuevamente al plugin, y agrego la información del nuevo array, con los datos que agregó el usuario en el formulario.
*/


function chargeTable() {
  $("div#cliente table").DataTable({
    data: dataCliente
  });

  $("div#equipo table").DataTable({
    data: dataTeam
  });

  $("li[data-tab]").on("click", function(event) {
    var elemento = this;
    activarTab(elemento);
    showTab(elemento);
  });
}

function addRowClient(e) {
  e.preventDefault();
  var clientName = $("#clientName").val();
  var clientError = $("#clientError").val();
  var clientType = $("#clientType").val();

  var dataNewClient = [clientName, clientError, clientType];

  var table = $("div#cliente table").DataTable();
  table.row.add(dataNewClient).draw();
}

function addRowTeam(f) {
  f.preventDefault();
  var memberName = $("#memberName").val();
  var memberJob = $("#jobName").val();
  var memberType = $("#memberType").val();

  var dataNewMember = [memberName, memberJob, memberType];

  var tableTeam = $("div#equipo table").DataTable();
  tableTeam.row.add(dataNewMember).draw();
}




/*PERFIL: 
1) Todo todos los id de los inputs y loa dejo vacíos.
2) Declaro una variable para que sea verdadera. 
3) Si las funciones no son verdaderas, entonces se lanzará un mensaje de error en un alert. Sino, se enviará el input y se agregará la data en las cajas 
con el contenido que estaba anteriormente.
(if(!nombredelafunción))http://www.forosdelweb.com/f13/que-significa-este-codigo-if-function-1065365/
4) Si todos los campos fueron completados, entonces es válido, y por lo tanto, se enviará el formulario
5) Declaro por fuera, todas las funciones donde tomo los valores que están dentro de los input y si son idénticos a cero, devolverá falso, sino se validará como 
verdadero*/


function sendForm() {
  $("#listaEquipo").html("");
  $("#listaCliente").html("");
  $("#erroresAnteriores").html("");
  $("#listaClientesPasados").html("");

  isValid = true;

  if (!validateEquipo()) {
    isValid = false;
    alert("Creemos que hay algo mal en el campo de tus members, fijate de nuevo.");
  } else {
    $("input[type=checkbox]:checked").each(function() {
      var resultHTML = "<p>" + $(this).val() + "</p>";

      $("#listaEquipo").append(resultHTML);
    });
  }

  if (!validateClienteComentarios()) {
    isValid = false;

    alert("Encontramos un error en el campo de tu cliente, revisalo porfis.");
  } else {
    $("#listaCliente").append($("textarea").val());
  }

  if ($("input[type=range]").val() == 0) $("#erroresAnteriores").append("");
  else $("#erroresAnteriores").append($("input[type=range]").val());


  if (!validateClientes()) {
    isValid = false;

    alert("¿Estás seguro que clickeaste bien?");
;
  } else {
    $("input[type=radio]:checked").each(function() {
      var resultHTML = "<p>" + $(this).val() + "</p>";

      $("#listaClientesPasados").append(resultHTML);
    });
  }

  if (isValid) {
  
    alert("¡Ya enviamos todo!");

    return false;
  } else {
 
    alert("Perfecto");
    return false;
  }
}

function validateEquipo() {
  if ($("input[type=checkbox]:checked").length == 0) {
    return false;
  } else {
    return true;
  }
}

function validateClienteComentarios() {
  if ($("textarea").val() == "") {
    return false;
  } else {
    return true;
  }
}

function validateClientes() {
  if ($("input[type=radio]:checked").length == 0) {
    return false;
  } else {
    return true;
  }
}

/*Solo deja escribir valores alfabeticos*/
function soloLetras(e) {
  var key = e.keyCode || e.which,
    tecla = String.fromCharCode(key).toLowerCase(),
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
    especiales = [8, 37, 39, 46],
    tecla_especial = false;

  for (var i in especiales) {
    if (key == especiales[i]) {
      tecla_especial = true;
      break;
    }
  }

  if (letras.indexOf(tecla) == -1 && !tecla_especial) {
    return false;
  }
}
/*Fin solo valores alfabeticos*/

/*Funcion para que los valores del CP y de Telefono no sobrepasen un limite numerico*/
function el(el) {
  return document.getElementById(el);
}

el('cp').addEventListener('input',function() {
  var val = this.value;
  this.value = val.replace(/\D|\-/,'');
});

function el(el) {
  return document.getElementById(el);
}

el('telefono').addEventListener('input',function() {
  var val = this.value;
  this.value = val.replace(/\D|\-/,'');
});
/*Fin funcion para que los valores del CP y de Telefono no sobrepasen un limite numerico*/

/*Funcion que valida si hay algo escrito o no*/
document.getElementById("btnFormulario").onclick = function() {

  if (document.getElementById("name").value == "") {
    document.getElementsByClassName("error")[0].style.display="block";
  } else {
    var name = true;
    document.getElementsByClassName("error")[0].style.display="none";
  }

  if(document.getElementById("apellido").value == "") {
    document.getElementsByClassName("error")[1].style.display="block";
  }  else {
    var apellido = true;
    document.getElementsByClassName("error")[1].style.display="none";
  }

  if(document.getElementById("direccion").value == "") {
    document.getElementsByClassName("error")[2].style.display="block";
  } else {
    var direccion = true;
    document.getElementsByClassName("error")[2].style.display="none";
  }

  if(document.getElementById("cp").value == "") {
    document.getElementsByClassName("error")[3].style.display="block";
  } else {
    var cp = true;
    document.getElementsByClassName("error")[3].style.display="none";
  }

  if(document.getElementById("ciudad").value == "") {
    document.getElementsByClassName("error")[4].style.display="block";
  } else {
    var ciudad = true;
    document.getElementsByClassName("error")[4].style.display="none";
  } 

  if(document.getElementById("provincia").value == "") {
    document.getElementsByClassName("error")[5].style.display="block";
  } else {
    var provincia = true;
    document.getElementsByClassName("error")[5].style.display="none";
  }

  /*Validacion del email*/
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
  var correocomprobacion=false;
  var correo = document.getElementById("email");

  if (emailRegex.test(correo.value)) {
      correocomprobacion=true;
      document.getElementsByClassName("error")[6].style.display="none";
  } else {
      correocomprobacion=false;
      document.getElementsByClassName("error")[6].style.display="block";
      /*alert("EMAIL NO VALIDO");*/
  } 
/*Fin validacion del email*/

  if(document.getElementById("telefono").value == "") {
    document.getElementsByClassName("error")[7].style.display="block";
  } else {
    var telefono = true;
    document.getElementsByClassName("error")[7].style.display="none";
  }

  /*Valida si esta todo bien, en caso de estar todo bien lo envia correctamente*/
  if (name == true && apellido == true && direccion == true && cp == true && ciudad == true && provincia == true && correocomprobacion == true && telefono == true) {
    document.getElementById("name").value="";
    document.getElementsByClassName("error")[1].style.display="none";
   
    document.getElementById("apellido").value='';
    document.getElementsByClassName("error")[2].style.display="none";
   
    document.getElementById("direccion").value='';
    document.getElementsByClassName("error")[3].style.display="none";
   
    document.getElementById("cp").value='';
    document.getElementsByClassName("error")[4].style.display="none";
   
    document.getElementById("ciudad").value='';
    document.getElementsByClassName("error")[5].style.display="none";
   
    document.getElementById("provincia").value='';
    document.getElementsByClassName("error")[6].style.display="none";
   
    document.getElementById("email").value='';
    document.getElementsByClassName("error")[7].style.display="none";
   
    document.getElementById("telefono").value='';
    document.getElementsByClassName("error")[8].style.display="none";
   
    document.getElementById("respuesta").value='';

    alert("¡Formulario enviado correctamente!")
  }
  /*Fin validacion enviar si esta bien*/
}
/*Fin funcion que valida si hay algo escrito o no*/

/*Restablece lo que este escrito*/
document.getElementById("btnRestablecer").onclick = function() {

 document.getElementById("name").value="";
 document.getElementsByClassName("error")[0].style.display="none";

 document.getElementById("apellido").value='';
 document.getElementsByClassName("error")[1].style.display="none";

 document.getElementById("direccion").value='';
 document.getElementsByClassName("error")[2].style.display="none";

 document.getElementById("cp").value='';
 document.getElementsByClassName("error")[3].style.display="none";

 document.getElementById("ciudad").value='';
 document.getElementsByClassName("error")[4].style.display="none";

 document.getElementById("provincia").value='';
 document.getElementsByClassName("error")[5].style.display="none";

 document.getElementById("email").value='';
 document.getElementsByClassName("error")[6].style.display="none";

 document.getElementById("telefono").value='';
 document.getElementsByClassName("error")[7].style.display="none";

 document.getElementById("respuesta").value='';

/*Fin restablece lo que este escrito*/
}

/*Muestra y oculta el div de telefono*/
document.getElementById("btnTelefono").onclick = function() {
  document.getElementById("telefonoDiv").style.display="block";
}

document.getElementById("btnOcultar").onclick = function() {
  document.getElementById("telefonoDiv").style.display="none";
}
/*Fin muestra y oculta el div de telefono*/

/*Muestra y oculta el div de formulario*/
document.getElementById("btnForm").onclick = function() {
  console.log("hl");
  document.getElementById("formulario").style.display="block";
}

document.getElementById("btnFormOcultar").onclick = function() {
  console.log("hl");
  document.getElementById("formulario").style.display="none";
}
/*Fin muestra y oculta el div de formulario*/
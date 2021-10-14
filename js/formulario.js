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
cp.oninput = function() {
  if (this.value.length > 5) {
    this.value = this.value.slice(0,5); 
  }
}

telefono.oninput = function() {
  if (this.value.length > 9) {
    this.value = this.value.slice(0,9); 
  }
}
/*Fin funcion para que los valores del CP y de Telefono no sobrepasen un limite numerico*/

/*Funcion que valida si hay algo escrito o no*/
document.getElementById("btnFormulario").onclick = function() {

  if (document.getElementById("name").value == "") {
    document.getElementById("error").style.display="block";
  } else {
    var name = true;
    document.getElementById("error").style.display="none";
  }

  if(document.getElementById("apellido").value == "") {
    document.getElementById("error2").style.display="block";
  }  else {
    var apellido = true;
    document.getElementById("error2").style.display="none";
  }

  if(document.getElementById("direccion").value == "") {
    document.getElementById("error3").style.display="block";
  } else {
    var direccion = true;
    document.getElementById("error3").style.display="none";
  }

  if(document.getElementById("cp").value == "") {
    document.getElementById("error4").style.display="block";
  } else {
    var cp = true;
    document.getElementById("error4").style.display="none";
  }

  if(document.getElementById("ciudad").value == "") {
    document.getElementById("error5").style.display="block";
  } else {
    var ciudad = true;
    document.getElementById("error5").style.display="none";
  } 

  if(document.getElementById("provincia").value == "") {
    document.getElementById("error6").style.display="block";
  } else {
    var provincia = true;
    document.getElementById("error6").style.display="none";
  }

  /*Validacion del email*/
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
  var correocomprobacion=false;
  var correo = document.getElementById("email");

  if (emailRegex.test(correo.value)) {
      correocomprobacion=true;
      document.getElementById("error7").style.display="none";
  } else {
      correocomprobacion=false;
      document.getElementById("error7").style.display="block";
      /*alert("EMAIL NO VALIDO");*/
  } 
/*Fin validacion del email*/

  if(document.getElementById("telefono").value == "") {
    document.getElementById("error8").style.display="block";
  } else {
    var telefono = true;
    document.getElementById("error8").style.display="none";
  }

  /*Valida si esta todo bien, en caso de estar todo bien lo envia correctamente*/
  if (name == true && apellido == true && direccion == true && cp == true && ciudad == true && provincia == true && correocomprobacion == true && telefono == true) {
    document.getElementById("name").value="";
    document.getElementById("error").style.display="none";
   
    document.getElementById("apellido").value='';
    document.getElementById("error2").style.display="none";
   
    document.getElementById("direccion").value='';
    document.getElementById("error3").style.display="none";
   
    document.getElementById("cp").value='';
    document.getElementById("error4").style.display="none";
   
    document.getElementById("ciudad").value='';
    document.getElementById("error5").style.display="none";
   
    document.getElementById("provincia").value='';
    document.getElementById("error6").style.display="none";
   
    document.getElementById("email").value='';
    document.getElementById("error7").style.display="none";
   
    document.getElementById("telefono").value='';
    document.getElementById("error8").style.display="none";
   
    document.getElementById("respuesta").value='';

    alert("¡Formulario enviado correctamente!")
  }
  /*Fin validacion enviar si esta bien*/
}
/*Fin funcion que valida si hay algo escrito o no*/

/*Restablece lo que este escrito*/
document.getElementById("btnRestablecer").onclick = function() {

 document.getElementById("name").value="";
 document.getElementById("error").style.display="none";

 document.getElementById("apellido").value='';
 document.getElementById("error2").style.display="none";

 document.getElementById("direccion").value='';
 document.getElementById("error3").style.display="none";

 document.getElementById("cp").value='';
 document.getElementById("error4").style.display="none";

 document.getElementById("ciudad").value='';
 document.getElementById("error5").style.display="none";

 document.getElementById("provincia").value='';
 document.getElementById("error6").style.display="none";

 document.getElementById("email").value='';
 document.getElementById("error7").style.display="none";

 document.getElementById("telefono").value='';
 document.getElementById("error8").style.display="none";

 document.getElementById("respuesta").value='';

/*Fin restablece lo que este escrito*/
}
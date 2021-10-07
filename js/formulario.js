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
document.getElementById("formulario").onclick = function() {

  if (document.getElementById("name").value == "") {
    alert("NO HAS INTRODUCIDO NINGUN NOMBRE");
  }

  if(document.getElementById("apellido").value == "") {
    alert("NO HAS INTRODUCIDO NINGUN APELLIDO");
  }

  if(document.getElementById("direccion").value == "") {
    alert("NO HAS INTRODUCIDO NINGUNA DIRECCIÓN");
  }

  if(document.getElementById("cp").value == "") {
    alert("NO HAS INTRODUCIDO NINGUN CODIGO POSTAL");
  }

  if(document.getElementById("ciudad").value == "") {
    alert("NO HAS INTRODUCIDO NINGUNA CIUDAD");
  }

  if(document.getElementById("provincia").value == "") {
    alert("NO HAS INTRODUCIDO NINGUNA PROVINCIA");
  }

  /*Validacion del email*/
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
  var correocomprobacion=false;
  var correo = document.getElementById("email");

  if (emailRegex.test(correo.value)) {
      correocomprobacion=true;
  } else {
      correocomprobacion=false;
      alert("EMAIL NO VALIDO");
  }
/*Fin validacion del email*/

  if(document.getElementById("telefono").value == "") {
    alert("NO HAS INTRODUCIDO NINGUN TELEFONO");
  }

}
/*Fin funcion que valida si hay algo escrito o no*/

document.getElementById("formulario").onclick = function() {

 document.getElementById("nombre").value='';
 document.getElementById("apellido").value='';
 document.getElementById("direccion").value='';
 document.getElementById("cp").value='';
 document.getElementById("ciudad").value='';
 document.getElementById("provincia").value='';
 document.getElementById("email").value='';
 document.getElementById("telefono").value='';
 document.getElementById("respuesta").value='';

}
/*Validacion del email*/

/*Validacion del email*/

/* */
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

  if(document.getElementById("email").value == "") {
    alert("NO HAS INTRODUCIDO NINGUN EMAIL");
  }

  if(document.getElementById("telefono").value == "") {
    alert("NO HAS INTRODUCIDO NINGUN TELEFONO");
  }

/*Fin funcion que valida si hay algo escrito o no*/


document.addEventListener("DOMContentLoaded", function (event) {

 var enlaces = document.querySelectorAll("a.idiomaColor");

numEnlc=0;

 for (let i = 0; i < enlaces.length; i++) {
    console.log(enlaces);
  enlaces[i].addEventListener("click", function(){
  cambioIdioma(i);
  });
}



function cambioIdioma(i) {
    numEnlc=i;
    console.log(enlaces[i]);
    if (enlaces[i].value=='ES'){
        alert("ADIOS");
    document.querySelector(".texto").innerHTML ="DE RUTA POR ESPAÑAaaaaaaaaaaaaaa";
    }
    else{
        alert("HOLA");
    }

}

});











// switch (num) {
//     case 1:

//         texto.innerHTML="<h3 class='module-title '>THE SPAIN ROUTE · DE RUTA POR ESPAÑA</h3>";
//         texto.innerHTML+="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill-rule='evenodd' d='M4.5 12.75a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75z'></path></svg>";
//         texto.innerHTML+="<p>¿Playas y pueblitos pesqueros? ¿Ciudades que parece que fueron creadas ayer?¿Bosques vestidos con niebla mañanera?<br>¿Montes alfombrados con verdes prados? ¿Viñedos que forman un paisaje espectacular?<br><strong>España te espera,</strong> para que puedas escoger la faceta que más te plazca .</p>";

//         break;
    
//     case 2:
//       texto.innerHTML="<h3 class='module-title '>ESPAINIATIK IBILTZEN</h3>";
//       texto.innerHTML+="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill-rule='evenodd' d='M4.5 12.75a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75z'></path></svg>";
//       texto.innerHTML+="<p>¿Hondartzak eta arrantzale herriak? ¿Atzo sortu ziren itxura duten hiriak? ¿Goizeko lainoa duten basoak?<br>¿Belardi berdez tapizatutako mendiak? Paisaia ikusgarria osatzen duten mahastiak?<br><strong>Espainia zure zain dago, </strong> gehien gustatzen zaizun alderdia aukeratu ahal izateko.</p>";
//         break;

//     case 3:
//         texto.innerHTML="<h3 class='module-title '>ROAD THROUGH SPAIN</h3>";
//         texto.innerHTML+="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill-rule='evenodd' d='M4.5 12.75a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75z'></path></svg>";
//         texto.innerHTML+="<p>Beaches and fishing villages? Cities that look like they were created yesterday? Forests clothed with morning fog? <br> Mountains carpeted with green meadows? Vineyards that form a spectacular landscape? <br> <strong> Spain awaits you, </strong> so that you can choose the facet that pleases you the most.</p>";
          
//         break;
// }
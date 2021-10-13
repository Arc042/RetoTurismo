
// var enlaces = document.querySelectorAll("a .idiomaColor");
numEnlc=0;
// for (let i = 0; i < enlaces.length; i++) {
//     console.log(enlaces);
//   enlaces[i].addEventListener("click", function(){
//  cambioIdioma(i);
//   });}

texto=document.querySelectorbyId("texto");

function cambioIdioma(num) {
    
switch (num) {
    case 1:
        texto.innerHTML="<h3 class='module-title '>THE SPAIN ROUTE · DE RUTA POR ESPAÑA</h3>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'>
        <path fill-rule='evenodd' d='M4.5 12.75a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75z'></path>
        </svg>
        <p>¿Playas y pueblitos pesqueros? ¿Ciudades que parece, fueron creadas ayer? ¿Bosques vestidos con niebla mañanera?<br>¿Montes alfombrados con verdes prados? ¿Viñedos que forman un paisaje espectacular?
        <br><strong>España te espera,</strong> para que puedas escoger la faceta que más te plazca .</p>"
        break;
    
    case 2:
      texto.innerHTML="<h3 class='module-title '>ESPAINIATIK IBILTZEN</h3>"
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'>
            <path fill-rule='evenodd' d='M4.5 12.75a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75z'></path>
        </svg>
        <p>¿Playas y pueblitos pesqueros? ¿Ciudades que parece, fueron creadas ayer? ¿Bosques vestidos con niebla mañanera?<br>¿Montes alfombrados con verdes prados? ¿Viñedos que forman un paisaje espectacular?
            "<br><strong>España te espera,</strong> para que puedas escoger la faceta que más te plazca .</p>"
        break;

    case 3:
    
        break;
}
}
   


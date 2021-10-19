/*JS para nuestro cambio de idiomas*/
texto=document.getElementById('texto')
texto1=document.getElementById('texto1')
texto2=document.getElementById('texto2')
texto3=document.getElementById('texto3')
texto4=document.getElementById('texto4')
texto5=document.getElementById('texto5');
texto6=document.getElementById('texto6');
texto7=document.getElementById('texto7');
texto8=document.getElementById('texto8');
texto9=document.getElementById('texto9');
texto10=document.getElementById('texto10');
texto11=document.getElementById('texto11');
texto12=document.getElementById('texto12');
texto13=document.getElementById('texto13');
texto14=document.getElementById('texto14');
texto15=document.getElementById('texto15');
texto16=document.getElementById('texto16');

/*Dependiendo del num, es un numero, entonces es un idioma diferente, cada case tiene un idioma*/
function cambioIdioma(num) {
console.log(num)
    switch (num) {
        
        case 1:
            texto.innerHTML="<h3 class='module-title '>DE RUTA POR ESPAÑA</h3><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill-rule='evenodd' d='M4.5 12.75a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75z'></path></svg><p>¿Playas y pueblitos pesqueros? ¿Ciudades que parece que fueron creadas ayer?¿Bosques vestidos con niebla mañanera?<br>¿Montes alfombrados con verdes prados? ¿Viñedos que forman un paisaje espectacular?<br><strong>España te espera,</strong> para que puedas escoger la faceta que más te plazca .</p>"
            texto1.innerHTML="<h5 class='card-title'>DESCUBRE</h5>"
            texto2.innerHTML="<h5 class='card-title'>VIVE</h5>"
            texto3.innerHTML="<h5 class='card-title'>RECOMIENDA</h5>"
            texto4.innerHTML="<h5 class='card-title'>VUELVE</h5>"
            texto5.innerHTML="<li class='nav-item'><a href='../html/index.html' class='nav-link active' aria-current='page'>Home</a></li>"
            texto6.innerHTML="<li class='nav-item' id='texto6'><a href='../html/lugar.html' class='nav-link'>Lugares</a>"
            texto7.innerHTML="<li class='nav-item' id='texto7'><a href='#' class='nav-link'>Precios</a></li>"
            texto8.innerHTML="<li class='nav-item' id='texto8'><a href='#' class='nav-link'>FAQs</a></li>"
            texto9.innerHTML="<li class='nav-item' id='texto9'><a href='../html/formulario.html' class='nav-link'>Contacto</a></li>"
            texto10.innerHTML="<a href='#!' class='text-white' id='texto10'>Contacto</a>"
            texto11.innerHTML="<a href='#!' class='text-white' id='texto11'>Conocemos</a>"
            texto12.innerHTML="<a href='#!' class='text-white' id='texto12'>Mapa Web</a>"
            texto13.innerHTML="<a href='#!' class='text-white' id='texto13'>Aviso Legal</a>"
            texto14.innerHTML="<a href='#!' class='text-white' id='texto14>'Uso' de la informacion</a>"
            texto15.innerHTML="<a href='#!' class='text-white' id='texto15'>Politica de Cookies</a>"
            texto16.innerHTML="<a href='#!' class='text-white' id='texto16'>Accesibilidad</a>"
            break;
        
        case 2:
            texto.innerHTML="<h3 class='module-title '>ESPAINIATIK IBILTZEN</h3><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill-rule='evenodd' d='M4.5 12.75a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75z'></path></svg><p>¿Hondartzak eta arrantzale herriak? ¿Atzo sortu ziren itxura duten hiriak? ¿Goizeko lainoa duten basoak?<br>¿Belardi berdez tapizatutako mendiak? Paisaia ikusgarria osatzen duten mahastiak?<br><strong>Espainia zure zain dago, </strong> gehien gustatzen zaizun alderdia aukeratu ahal izateko.</p>"
            texto1.innerHTML="<h5 class='card-title'>AURKITU</h5>"
            texto2.innerHTML="<h5 class='card-title'>BIZI</h5>"
            texto3.innerHTML="<h5 class='card-title'>GOMENDATU</h5>"
            texto4.innerHTML="<h5 class='card-title'>BUELTATU</h5>"
            texto5.innerHTML="<li class='nav-item'><a href='../html/index.html' class='nav-link active' aria-current='page'>Etxea</a></li>"
            texto6.innerHTML="<li class='nav-item' id='texto6'><a href='../html/lugar.html' class='nav-link'>Lekuak</a>"
            texto7.innerHTML="<li class='nav-item' id='texto7'><a href='#' class='nav-link'>Prezioak</a></li>"
            texto8.innerHTML="<li class='nav-item' id='texto8'><a href='#' class='nav-link'>FAQs</a></li>"
            texto9.innerHTML="<li class='nav-item' id='texto9'><a href='../html/formulario.html' class='nav-link'>Kontaktatu</a></li>"
            texto10.innerHTML="<a href='#!' class='text-white' id='texto10'>Kontaktatu</a>"
            texto11.innerHTML="<a href='#!' class='text-white' id='texto11'>Ezagutu</a>"
            texto12.innerHTML="<a href='#!' class='text-white' id='texto12'>Web Mapa</a>"
            texto13.innerHTML="<a href='#!' class='text-white' id='texto13'>Legezko Abisua</a>"
            texto14.innerHTML="<a href='#!' class='text-white' id='texto14>Informazioaren erabilera</a>"
            texto15.innerHTML="<a href='#!' class='text-white' id='texto15'>Cookie Politika</a>"
            texto16.innerHTML="<a href='#!' class='text-white' id='texto16'>Irisgarritasuna</a>"
            break;

        case 3:
            texto.innerHTML="<h3 class='module-title '>ROAD THROUGH SPAIN</h3><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill-rule='evenodd' d='M4.5 12.75a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75z'></path></svg><p>Beaches and fishing villages? Cities that look like they were created yesterday? Forests clothed with morning fog? <br> Mountains carpeted with green meadows? Vineyards that form a spectacular landscape? <br> <strong> Spain awaits you, </strong> so that you can choose the facet that pleases you the most.</p>"
            texto1.innerHTML="<h5 class='card-title'>DISCOVER</h5>"
            texto2.innerHTML="<h5 class='card-title'>LIVE</h5>"
            texto3.innerHTML="<h5 class='card-title'>RECOMMEND</h5>"
            texto4.innerHTML="<h5 class='card-title'>COME BACK</h5>"
            texto5.innerHTML="<li class='nav-item'><a href='../html/index.html' class='nav-link active' aria-current='page'>Home</a></li>"
            texto6.innerHTML="<li class='nav-item' id='texto6'><a href='../html/lugar.html' class='nav-link'>Sites</a>"
            texto7.innerHTML="<li class='nav-item' id='texto7'><a href='#' class='nav-link'>Prices</a></li>"
            texto8.innerHTML="<li class='nav-item' id='texto8'><a href='#' class='nav-link'>FAQs</a></li>"
            texto9.innerHTML="<li class='nav-item' id='texto9'><a href='../html/formulario.html' class='nav-link'>Contacts</a></li>"
            texto10.innerHTML="<a href='#!' class='text-white' id='texto10'>Contacts</a>"
            texto11.innerHTML="<a href='#!' class='text-white' id='texto11'>know us</a>"
            texto12.innerHTML="<a href='#!' class='text-white' id='texto12'>Web Map</a>"
            texto13.innerHTML="<a href='#!' class='text-white' id='texto13'>Legal warning</a>"
            texto14.innerHTML="<a href='#!' class='text-white' id='texto14>Information 'use'</a>"
            texto15.innerHTML="<a href='#!' class='text-white' id='texto15'>Cookies policy</a>"
            texto16.innerHTML="<a href='#!' class='text-white' id='texto16'>Accessibility</a>"
            break;
    }
}
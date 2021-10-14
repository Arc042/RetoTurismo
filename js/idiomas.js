texto=document.getElementById('texto')
texto1=document.getElementById('texto1')
texto2=document.getElementById('texto2')
texto3=document.getElementById('texto3')
texto4=document.getElementById('texto4')

function cambioIdioma(num) {
console.log(num)
    switch (num) {
        
        case 1:
            texto.innerHTML="<h3 class='module-title '>DE RUTA POR ESPAÑA</h3><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill-rule='evenodd' d='M4.5 12.75a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75z'></path></svg><p>¿Playas y pueblitos pesqueros? ¿Ciudades que parece que fueron creadas ayer?¿Bosques vestidos con niebla mañanera?<br>¿Montes alfombrados con verdes prados? ¿Viñedos que forman un paisaje espectacular?<br><strong>España te espera,</strong> para que puedas escoger la faceta que más te plazca .</p>"
            texto1.innerHTML="<h5 class='card-title'>DESCUBRE</h5>"
            texto2.innerHTML="<h5 class='card-title'>VIVE</h5>"
            texto3.innerHTML="<h5 class='card-title'>RECOMIENDA</h5>"
            texto4.innerHTML="<h5 class='card-title'>VUELVE</h5>"
            break;
        
        case 2:
            texto.innerHTML="<h3 class='module-title '>ESPAINIATIK IBILTZEN</h3><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill-rule='evenodd' d='M4.5 12.75a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75z'></path></svg><p>¿Hondartzak eta arrantzale herriak? ¿Atzo sortu ziren itxura duten hiriak? ¿Goizeko lainoa duten basoak?<br>¿Belardi berdez tapizatutako mendiak? Paisaia ikusgarria osatzen duten mahastiak?<br><strong>Espainia zure zain dago, </strong> gehien gustatzen zaizun alderdia aukeratu ahal izateko.</p>"
            texto1.innerHTML="<h5 class='card-title'>AURKITU</h5>"
            texto2.innerHTML="<h5 class='card-title'>BIZI</h5>"
            texto3.innerHTML="<h5 class='card-title'>GOMENDATU</h5>"
            texto4.innerHTML="<h5 class='card-title'>BUELTATU</h5>"
            break;

        case 3:
            texto.innerHTML="<h3 class='module-title '>ROAD THROUGH SPAIN</h3><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill-rule='evenodd' d='M4.5 12.75a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75z'></path></svg><p>Beaches and fishing villages? Cities that look like they were created yesterday? Forests clothed with morning fog? <br> Mountains carpeted with green meadows? Vineyards that form a spectacular landscape? <br> <strong> Spain awaits you, </strong> so that you can choose the facet that pleases you the most.</p>"
            texto1.innerHTML="<h5 class='card-title'>DISCOVER</h5>"
            texto2.innerHTML="<h5 class='card-title'>LIVE</h5>"
            texto3.innerHTML="<h5 class='card-title'>RECOMMEND</h5>"
            texto4.innerHTML="<h5 class='card-title'>COME BACK</h5>"
            break;
    }
}
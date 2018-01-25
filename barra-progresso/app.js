// creiamo delle reference ai tag <body> e <html>
var body = document.body,
    html = document.documentElement;

// otteniamo l'altezza totale della pagina
var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
// sottraiamo all'altezza della pagina, l'altezza della finestra
height-=window.innerHeight;
// funzione per spostare la barra di caricamento
var update = function(){
	// dividendo l'altezza corrent per l'altezza totoale otteniamo un numero tra 0 e 1 
    scroll_ratio = document.documentElement.scrollTop/ height;
 	// reference al tag <div id="barra-progresso">
    var barra = document.getElementById('barra-progresso');
    // molitpiclichiamo il numero per 100 per ottenere un numerto tra 0 e 100
    // usiamo questo numero per cambiare la proprietà width della barra in percentuale
    barra.style.width = scroll_ratio*100 + "%";
}

// chiamiamo la funzione update quando la pagina è caricata
update();

// chiamiamo la funzione update quando l'user esegue uno scroll con il mouse
window.onscroll = function() {
	update();
};
// mostra il popup dopo 2k millisecondi (2secondi)
setTimeout(
    function() {
    	console.log("run");
      document.getElementById('pop').style.display="block"	;
   	}, 2000);


// chiudi il pupup quando clicchi sulla X
document.getElementById("close").onclick = function(e){
    document.getElementById('pop').style.display="none";
}

// chiudi il popup quando clicchi sullo sfondo nero
document.getElementById("pop").onclick = function(e){
	document.getElementById('pop').style.display="none";	
}
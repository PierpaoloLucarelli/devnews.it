var body = document.body,
    html = document.documentElement;
    
var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
height-=window.innerHeight;

var update = function(){
    scroll_ratio = document.documentElement.scrollTop/ height;
    console.log();
    var barra = document.getElementById('barra-progresso');
    barra.style.width = scroll_ratio*100 + "%";
}

update();
console.log(height);

window.onscroll = function() {
	update();
};
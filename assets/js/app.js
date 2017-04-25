

var icono=document.getElementsByTagName("i");

for (var i=0; i<icono.length;i++){

  icono[i].addEventListener("mouseover",mostrar);
  icono[i].addEventListener("mouseout",ocultar);
}

function mostrar(e){
    e.classList.add("mostrar");
}

function ocultar(e){
  e.classList.remove("ocultar");
}

var menu=document.getElementsByClassName('toogle');
var ul=document.getElementsByClassName('menu-nav');
var nav=document.getElementsByClassName('main-nav');
var html=document.getElementsByTagName('html');
// var panel=document.getElementsByTagName('nav');
// var up=document.getElementsByClassName('up');

function cambiar(event){
  if(menu[0].className=="toogle open"){
    menu[0].classList.remove("open");
    ocultar();
  }
  else{
    menu[0].classList.add("open");
    mostrar();
    //tiene que agregar height al 100% al nav, tb centrar el ul...
  }
}

function mostrar(){
  ul[0].style.display="block";
  nav[0].style.height="100%";
  html[0].style.overflow="hidden";
}

function ocultar(){
  ul[0].style.display="none";
  nav[0].style.height="80px";
  html[0].style.overflow="auto";
}

menu[0].addEventListener('click', cambiar);

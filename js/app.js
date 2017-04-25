var menu=document.getElementsByClassName('toogle');
var ul=document.getElementsByClassName('menu-nav');
var nav=document.getElementsByClassName('main-nav');
var html=document.getElementsByTagName('html');
var flecha=document.getElementById('flecha');
console.log(flecha);
var logo=document.getElementById('logo');
var title=document.getElementById('title');
var play=document.getElementById('play');
var cierra = document.getElementById("close");
var modal = document.getElementById('myModal');
var v = document.getElementsByTagName("video")[0];
var servicios=document.getElementById('servicios');
var panel=document.getElementsByClassName('portada');
console.log(panel[0]);
var finalScroll=0;

function cambiar(event){
  if(menu[0].className=="toogle open"){
    menu[0].classList.remove("open");
    ocultar();
  }
  else{
    menu[0].classList.add("open");
    mostrar();
  }
}

function mostrar(){
  ul[0].style.display="block";
  nav[0].style.height="100%";
  html[0].style.overflow="hidden";
  play.style.visibility="hidden";
}

function ocultar(){
  ul[0].style.display="none";
  nav[0].style.height="80px";
  html[0].style.overflow="auto";
  play.style.visibility="visible";
}

function more(event){
  // if(servicios.style.height=="100px"){
  //   servicios.style.height="0";
  // }else{
  //   servicios.style.height="100px";
  // }
}

play.addEventListener('mouseover',function (e){
  e.preventDefault();
  if(e.target.tagName == "SPAN"){
    var modalVideo = document.getElementById("video01");
    v.play();
    modal.style.display="block";
    menu[0].style.display="none";
    play.style.visibility="hidden";
    }
});

function cerrar (event){
  event.preventDefault();
  modal.style.display="none";
  menu[0].style.display="block";
  v.pause();
  v.currentTime =0;
  play.style.visibility="visible";
}

function scrollWin() {
    window.scrollTo(0, 654);
}

flecha.addEventListener('click',scrollWin);

function moveScroll(event){
  var scroll=window.pageYOffset || document.body.scrollTop;
  if(scroll>finalScroll){
    panel[0].style.display="none";
    console.log(scroll);
  }
  if(scroll>=653){
    panel[0].style.display="block";
    panel[0].classList.add("up");}
  if(scroll<=3){
    panel[0].style.display="block";
    panel[0].setAttribute("class","portada");
  }

}



cierra.addEventListener('click',cerrar);
menu[0].addEventListener('click', cambiar);
// flecha.addEventListener('click',more);
window.addEventListener('scroll',moveScroll);

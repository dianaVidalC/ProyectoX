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
var redes=document.getElementById('redes');
var finalScroll=0;

function cambiar(event){
  if(menu[0].className=="toogle open"){
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
  menu[0].classList.remove("open");
}

var anchor=document.getElementsByClassName('spanM');
var tamano=anchor.length;
for(var i=0;i<tamano;i++){
  anchor[i].addEventListener('click',ocultar);
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
    window.scrollAmount="5"
}


function moveScroll(event){
  var scroll=window.pageYOffset || document.body.scrollTop;
  if(scroll>finalScroll){
    panel[0].style.display="none";
    redes.style.display="none";
    console.log(scroll);
  }
  if(scroll>=610){
    panel[0].style.display="block";
    panel[0].classList.add("up");
    redes.style.display="block";
  }
  if(scroll<=3){
    panel[0].style.display="block";
    panel[0].setAttribute("class","portada");
  }
  if(scroll>1950){
    redes.style.display="none";
  }
}

function galeria(event){
  var fotos=["jugando en el hospedaje-Pachacamac","Lo entrenamos con cariño","Los cachorros están en su área de juegos","Primer día de Totty en la guarderia canina","Sake juega feliz con nosotros","Gozan de más salud","Están siempre bajo supervisión","Ellos aman estar aquí"];
  var tamano=fotos.length;
  console.log(tamano);
  var section=document.getElementById('galeria');
  var fragment=document.createDocumentFragment();
  for(var i=0;i<tamano;i++){
    var div1=document.createElement('div');
    div1.setAttribute('class','containerG');
    var div2=document.createElement('div');
    div2.setAttribute('class','div-imgG');
    var img=document.createElement('img');
    img.setAttribute('class','imgG');
    img.src="image/" +fotos[i] + ".jpg";
    img.alt=fotos[i];
    var text=document.createElement('div');
    text.setAttribute('class','textG');
    text.innerHTML=fotos[i];

    div1.appendChild(div2);
    div2.appendChild(img);
    div2.appendChild(text);
    fragment.appendChild(div1);
  }
    section.appendChild(fragment);
}

var body=document.getElementsByTagName('body')[0];
body.onbeforeunload = function(e) {
  return "Gracias por visitar nuestra página";
};

window.addEventListener('load',galeria);
flecha.addEventListener('click',scrollWin);
cierra.addEventListener('click',cerrar);
menu[0].addEventListener('click', cambiar);
window.addEventListener('scroll',moveScroll);

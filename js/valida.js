var nombre=document.getElementById('name');
var correo=document.getElementById('mail');
var asunto=document.getElementById('asunto');
var mensaje=document.getElementById('msj');
var span=document.getElementsByName('spanValid');
var envia=document.getElementById('envia');

// function valida(event){
//   event.preventDefault();
//   // for(var i=0; i<span.length;i++){
//   //   // span[i].style.display="block";
//   //
//   //   }
//
// //   if(!(nombre=="") || (/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(nombre))){
// //     alert("nombre");
// //     span[0].style.display="none";
// //     primMay(nombre);
// //   }
// //
// //   if ((/[\w]+@{1}[\w]+\.[a-z]{2,3}/.test(correo))){
// //     span[2].style.display="none";
// //   }
// //
// //   if(nombre.value!="" &&  correo.value!=""){
// // 		clear();
// // 	}
// // }
// //
// // // función que cambia la primera letra del string a mayúscula
// // function primMay(item){
// //   var txt="";
// //   var separa=(item.value).split(" ");
// // 	separa.forEach(function(e){
// //     return txt = txt + e.charAt(0).toUpperCase() + e.slice(1) + " ";});
// //   var imp=txt.trim();
// // 	return (item).value=imp;
// // }
// //
// // //función que limpia los casilleros(se puede mejorar función)
// // function clear(){
// //   nombre.value="";
// //   correo.value="";
// }

// envia.addEventListener('click',letras);

function letras(e){
  var key=e.keyCode;
  console.log(key);
  var teclado=String.fromCharCode(key).toLowerCase();
  console.log(teclado);
  var letras=" abcdefghijklmnopqrstuvwxyz";
  var especiales="8-37-38-46-164";
  var teclado_especial=false;
  for (var i in especiales){
    if(key==especiales[i]){
      teclado_especial=true;
      break;
    }
  }
  if(letras.indexOf(teclado)==-1 && !teclado_especial){
    return false;
  }
}

function noPegar(){
  return false;
}

nombre.onkeypress=letras;
nombre.onpaste=noPegar;

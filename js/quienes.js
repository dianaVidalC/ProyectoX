var body=document.getElementsByTagName('body')[0];
body.onbeforeunload = function(e) {
  return "Gracias por visitar nuestra página";
};

// var pagina=index.html
// function redireccionar()
// {
//   window.onbeforeunload = null;
//   location.href=pagina
// }
//
// window.onunload= setTimeout (redireccionar(), 2000);

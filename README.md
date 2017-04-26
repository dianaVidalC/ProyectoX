# Panda
Es un ejemplo de una página web sobre "Pandas" se basa en agregar estilos con un archivo externo (main.css), tiene un html con un header que contiene un menú, una section con unas fotos y una section con dos articles que tienen un par de párrafos cada uno.Las funcionalidades se detallan más adelante.

- Header: Aquí se encuentra el menú de navegación que no tiene funcionalidad por ahora.
- Section de fotos: Esta sección con 4 fotos de Panda, tiene la **clase panel** con la cual se selecciona para darle estilos en el documento css, además se puede hacer click sobre la "x" y la foto seleccionada desaparece.
- Section de botones: Esta sección tiene los botones "origen", "extinción" y "restaurar fotos"; todos tienen la **clase boton** con lo que se les da estilos con el css. Al hacer click sobre cada botón se ejecuta una función; cuando se hace click sobre el botón "origen" desaparece el *article de la izquierda de la section de párrafos*; al hacer click sobre el botón "extinción" desaparece el *article de la derecha de la section de párrafos*; al clickear el botón "restaurar fotos" va a mostrar las fotos que ocultaste con anterioridad(leer section de fotos).
- Section de párrafos: Esta sección tiene dos articles cada uno con 2 párrafos; a cada article se le coloco un id para poder ocultarlos cuando se haga click en el boton "origen" o "extinción".

## Funcionalidades en JS
------------------------

### Function ocultar.
Esta función se encarga de ocultar cada foto al hacer click sobre la "x"(etiqueta span).
Se hizo un switch para la condicional que depende del objeto que desencadena el evento para ocultar (usa object.style.display="none") un elemento; obteniendo el objeto que desencadena el evento por medio de "event.target"; se tuvo que colocar un id="images" para poder seleccionar esta sección y se estableció que sólo reconozca si el objeto a clickear era un "span".

![function ocultar](assets/images/ocultar.png)


### Function restaurar.
 Esta función se encarga de restaurar las fotos que se ocultaron; con lo cual coloca un object.style.display="block". Para esta función sólo necesitamos un ciclo for que recorra todo el array de la clase divs (var divs).

![function restaura](assets/images/restaura.png)

### Funcionalidad de ocultar/mostrar.
 Esta funcionalidad la vamos a observar en los articles. Lo que usamos aquí es visibility; porque deseamos que el espacio se mantenga y no colapse como con un display="none"; así que usaremos "hidden" para "desparecerlo" y "visible" para hacerlo visible.

![funcionalidades](assets/images/funcionalidad.png)


## Autor: Stephanie Hiyagon.

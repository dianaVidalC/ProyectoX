window.addEventListener("beforeunload", function(event) {
    event.returnValue = "Seguro que desea abandonar la página?...";
});

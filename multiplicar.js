function generarTablas() {
    let contenedor = document.getElementById("contenedor-tabla");
    let contenido = "";
    for (let i = 1; i <= 10; i++) {
        contenido += "<div>3 x " + i + " = " + (3 * i) + "</div>";
    }
    contenedor.innerHTML = contenido;
}
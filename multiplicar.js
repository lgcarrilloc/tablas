function generarTablas() {
    let contenedor = document.getElementById("contenedor-tabla");
    let numero = document.getElementById("numero-tabla").value;
    let contenido = "";
    for (let i = 1; i <= 15; i++) {
        contenido += "<div>" + numero + "x" + i + " = " + (numero * i) + "</div>";
    }
    contenedor.innerHTML = contenido;
}
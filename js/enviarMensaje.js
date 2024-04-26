//Funcion para enviar el mensaje que da el trabajo como iniciado
function enviarMensajeIniciacion() {
    let numeroCliente = document.getElementById('telefonoCliente').textContent
    let mensaje = "El trabajo se empezo a hacer"

    var url = "https://wa.me/" + numeroCliente + "?text=" +mensaje+"%0a%0a";
    console.log(url)
    window.open(url, '_blank').focus();
}

//funcion para enviar el mensaje que da como finalizado el trabajo
function enviarMensajeFinalizacion() {
    let numeroCliente = document.getElementById('telefonoCliente').textContent
    let nombreCliente = document.getElementById('nombreCliente').textContent
    let trabajoRealizado = document.getElementById('txtTrabajoRealizado').value
    let montoAPagar = document.getElementById('txtMonto').value

    var url = "https://wa.me/" + numeroCliente + "?text=" +nombreCliente+
    "%0a" + "Trabajo realizado: " +trabajoRealizado+ "%0a" + "Monto a pagar: $" +montoAPagar+ "%0a%0a";

    console.log(url)
    window.open(url, '_blank').focus();
}
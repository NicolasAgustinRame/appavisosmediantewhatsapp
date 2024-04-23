/* 
    function sendToWhatsApp() {
    let numer = ""
    let otroNumero = ""

    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let message = document.getElementById('message').value

    var url = "https://wa.me/" + numer + "?text=" + "Name: " +name+
    "%0a" + "Email: " +email+ "%0a" + "Message: " +message+ "%0a%0a";

    window.open(url, '_blank').focus();
}
*/

function enviarMensajeAWhatsApp() {
    let numeroCliente = document.getElementById('telefonoCliente').textContent
    let nombreCliente = document.getElementById('nombreCliente').textContent
    let trabajoRealizado = document.getElementById('txtTrabajoRealizado').value
    let montoAPagar = document.getElementById('txtMonto').value

    var url = "https://wa.me/" + numeroCliente + "?text=" +nombreCliente+
    "%0a" + "Trabajo realizado: " +trabajoRealizado+ "%0a" + "Monto a pagar: $" +montoAPagar+ "%0a%0a";

    console.log(url)
    window.open(url, '_blank').focus();
}
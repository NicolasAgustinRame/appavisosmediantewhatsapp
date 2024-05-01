var form = document.querySelector("#myForm"),
    numOrden = document.getElementById("txtNumeroOrden"),
    nuevoClienteNombre = document.getElementById("txtNombreCliente"),
    nuevoClienteTelefono = document.getElementById("txtNumeroCliente"),
    descripcionTrabajo = document.getElementById("txtDescripcion"),
    fechaDeInicioTrabajo = document.getElementById("date"),
    clienteInfo = document.getElementById("data"),
    submitBtn = document.querySelector(".submit")

let getData = localStorage.getItem('clientePrefil') ? JSON.parse(localStorage.getItem('clientePrefil')) : []

function showInfo() {
    const clienteContainer = document.getElementById("clienteContainer")
    clienteContainer.innerHTML = ''

    const hoy = new Date()

    getData.forEach((element, index) => {

        const fechaInicio = new Date(element.fecha)
        const diferenciaTiempo = hoy.getTime() - fechaInicio.getTime()
        const diasPasados = Math.floor(diferenciaTiempo / (1000 * 3600 * 24))

        let createElement = `
        <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 cliente" id="data${index}">
            <div class="row justify-content-center">
                <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-4 d-flex justify-content-between cliente">
                    <p class="mt-3 me-1 ms-1 contraste" id="numeroOrden">${element.numeroDeOrden}</p>
                    <p class="mt-3  contraste" id="nombreCliente">${element.nombre}</p>
                    <p class="mt-3 me-1 ms-1 contraste" id="telefonoCliente">${element.telefono}</p>
                </div>
            </div>  
            <div class="row justify-content-center">
                <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-4 d-flex justify-content-between cliente">
                    <p class="mt-3 me-1 ms-1 contraste" id="descripcion">${element.descripcion}</p>
                    <p class="mt-3 me-1 ms-1 contraste" id="fechaDeInicio">Iniciado hace ${diasPasados} días</p>
                </div>
            </div>    
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center">
                <button type="button" class="btn btn-success mb-3 mx-2 contraste button-contraste" data-bs-toggle="modal" data-bs-target="#modalTerminarTrabajo"><i class="bi bi-check-circle"></i></button>
                <button class="btn btn-danger mb-3 button-contraste" onclick="deleteCliente(${index})"><i class="bi bi-trash"></i></button>
            </div>
        </div>`;
        clienteContainer.innerHTML += createElement;
    })
}
showInfo()

function deleteCliente(index) {
    Swal.fire({
        title: "Deseas eliminar este cliente?",
        text: "No hay vuelta atras!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Eliminado!",
                text: "Tu cliente ha sido eliminado",
                icon: "success"
            });
            getData.splice(index, 1)
            localStorage.setItem('clientePrefil', JSON.stringify(getData))
            showInfo()
        }
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const informacion = {
        numeroDeOrden: numOrden.value,
        nombre: nuevoClienteNombre.value,
        telefono: nuevoClienteTelefono.value,
        descripcion: descripcionTrabajo.value,
        fecha: fechaDeInicioTrabajo.value
    }
    getData.push(informacion)
    localStorage.setItem('clientePrefil', JSON.stringify(getData))
    submitBtn.innerText = "Submit"

    showInfo()
    form.reset()

})

function enviarMensaje() {
    let montoAPagar = document.getElementById('txtMonto').value

    getData.forEach((element) => {
        var url = "https://wa.me/" + element.telefono + "?text=" +element.nombre+
        "%0a" + "Trabajo realizado: " +element.descripcion+ "%0a" + "Monto a pagar: $" +montoAPagar+ "%0a%0a";

        console.log(nombreCliente, telefonoCliente, descripcion)
        console.log(url)
        window.open(url, '_blank').focus();
    })
}



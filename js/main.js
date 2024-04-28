var form = document.querySelector("#myForm"),
    nuevoClienteNombre = document.getElementById("txtNombreCliente"),
    nuevoClienteTelefono = document.getElementById("txtNumeroCliente"),
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
        <div class="cliente" id="data${index}">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-6 d-flex justify-content-between cliente">
                <img width="48" height="48" src="images/icono2-cliente.png" alt="user" class="mx-3 mt-1" />
                <p class="mt-3 me-1 ms-1 contraste" id="nombreCliente">${element.nombre}</p>
                <p class="mt-3 me-1 ms-1 contraste" id="telefonoCliente">${element.telefono}</p>
                <p class="mx-3 mt-3 me-1 ms-1 contraste" id="fechaDeInicio">Empezado hace ${diasPasados} dias</p>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3 d-flex justify-content-center">
                <button type="button" class="btn btn-success mb-3 mx-2 contraste button-contraste" data-bs-toggle="modal" data-bs-target="#modalTerminarTrabajo" >Terminar</button>
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
        nombre: nuevoClienteNombre.value,
        telefono: nuevoClienteTelefono.value,
        fecha: fechaDeInicioTrabajo.value
    }
    getData.push(informacion)
    localStorage.setItem('clientePrefil', JSON.stringify(getData))
    submitBtn.innerText = "Submit"

    showInfo()
    form.reset()

})

//defincion de variables
let btnMostrar = document.querySelector("#boton");
let datos = document.getElementById("#contenido");

btnMostrar.addEventListener('click', ()=>{

    fetch('./datos.JSON', {mode: 'no-cors'})
        .then (Response => Response.json())
        .then (data => {
        //limpiar tabla e iniciar en 0
            datos.innerHTML = ""

            for (let index of data) {
                datos.innerHTML += `
                <tr>
                    <th scope="row">${index.id}</th>
                    <td>${index.nombre}</td>
                    <td>${index.apellido}</td>
                    <td>${index.email}</td>
                </tr>`
            }
        })

}
)
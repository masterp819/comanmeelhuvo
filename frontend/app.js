const API = "http://localhost:3000/usuarios"

const cargar = async () => {
    const datos = await (await fetch(API)).json()

    tabla.innerHTML = datos.map(u => `
        <tr>
            <td>${u.id}</td>
            <td>${u.nombre}</td>
            <td>${u.correo}</td>
            <td>${u.edad}</td>
            <td>${u.rol}</td>
            <td>
                <button onclick="editar(${u.id},'${u.nombre}','${u.correo}','${u.edad}','${u.rol}')">E</button>
                <button onclick="eliminar(${u.id})">X</button>
            </td>
        </tr>
    `).join("")
}

const guardar = async () => {

    const datos = {
        nombre: nombre.value,
        correo: correo.value,
        edad: edad.value,
        rol: rol.value
    }

    await fetch(
        id.value ? API+"/"+id.value : API,
        {
            method: id.value ? "PUT" : "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(datos)
        }
    )

    id.value=""
    nombre.value=""
    correo.value=""
    edad.value=""
    rol.value=""

    cargar()
}

const editar = (i,n,c,e,r) => {
    id.value=i
    nombre.value=n
    correo.value=c
    edad.value=e
    edad.rol=r
}

const eliminar = async i => {
    await fetch(API+"/"+i,{method:"DELETE"})
    cargar()
}

cargar()
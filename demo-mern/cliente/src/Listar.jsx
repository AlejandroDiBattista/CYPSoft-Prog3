function Listar({ contactos, alAgregar, alEditar, alBorrar }) {
    function agregar() {
        alAgregar( { nombre: "", apellido: "", telefono: "" })
    }

    return (
        <>
            <h1>Contactos <button onClick={agregar}>Agregar</button></h1>
            {contactos.map(c => 
                <section key={c._id}>
                    <p>{c.nombre} <b>{c.apellido}</b></p>
                    <p>{c.telefono}</p>
                    <button onClick={() => alEditar(c)}><b>Editar</b></button>
                    <button onClick={() => alBorrar(c)}><b>Borrar</b></button>
                </section>    
            )}
        </>
    )
}

export default Listar
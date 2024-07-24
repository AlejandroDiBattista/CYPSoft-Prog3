function Listar({ contactos, alAgregar, alBorrar }) {
    function agregar() {
    alAgregar()
    }
    return (
        <>
            <hl>Contactos <button onClick= {agregar}>Agregar</button></hl>
            {contactos.map(c =>
                <section key={c._id}>
                    <p>{c.nombre} <b>{c.apellido}</b></p>
                    <p>{c.telefono}</p>
                    <button onClick={()=> alBorrar(c)}><b>Borrar</b>/</button>
                </section>
            )}
        </>
    )
}
    export default Listar
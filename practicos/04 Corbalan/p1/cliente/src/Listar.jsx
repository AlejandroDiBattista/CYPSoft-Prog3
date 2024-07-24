

function Listar({contactos, alAgregar, alBorrar, alEditar}){

    function agregar(){
        alAgregar({nombre: "", apellido: "", telefono: ""});
    }

    return(
        <>
        <h1>Agenda<button onClick={agregar}><b>Agregar</b></button></h1>
        {contactos.map (c => 
            <section key={c._id}>
                <p><b> Nombre:</b> {c.nombre} {c.apellido}</p>
                <p> <b>Telefono:</b> {c.telefono}</p>
                <button onClick={() => alEditar(c)}>Editar</button>
                {/*Agrego boton para editar un contacto*/}
                <button onClick={()=> alBorrar(c)}>Borrar</button>
            </section>
        )}
        </>
    )
}
export default Listar;
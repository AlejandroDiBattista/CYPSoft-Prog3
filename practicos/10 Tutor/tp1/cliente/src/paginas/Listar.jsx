// Componente funcional Listar que muestra una lista de contactos
function Listar({ contactos, alAgregar, alEliminar, alEditar }) {

    // Función para agregar un nuevo contacto vacío
    function agregar() {
        alAgregar({ nombre: '', apellido: '', telefono: '' });	
    }

    // Renderiza la estructura JSX del componente Listar
    return (
        <div>
            <h1>Agenda</h1>
            <button onClick={agregar}>Agregar</button>

            {/* Mapea todos los contactos y los muestra en secciones */}
            {contactos.map(c => (
                <section key={c._id} className="card">
                    <b>{c.nombre} {c.apellido}</b>
                    <p>{c.telefono}</p>
                    <button onClick={() => alEliminar(c)}>Eliminar</button>
                    <button onClick={() => alEditar(c)}>Modificar</button> {/* Nuevo botón para modificar */}
                </section>
            ))}
        </div>
    );
}


export default Listar;

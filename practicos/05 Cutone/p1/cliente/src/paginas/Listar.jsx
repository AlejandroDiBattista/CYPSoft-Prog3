// cliente/src/Listar.jsx

function Listar({ contactos, alAgregar, alEliminar, alEditar }) {
	function agregar() {
		alAgregar({ nombre: '', apellido: '', telefono: '' });	
	}

    return (
		<div>
			<h1>Agenda <button onClick={agregar}>Agregar</button></h1>

			{contactos.map(c => (
				<section key={c._id}>
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

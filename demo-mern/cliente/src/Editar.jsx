import { useState } from 'react'

function Editar({ contacto, alActualizar }) {
    const [datos, setDatos] = useState(contacto)
    
    function cambiar(e) {
        setDatos({ ...datos, [e.target.name]: e.target.value })
    }

    function validar() {
        return datos.nombre && datos.apellido && datos.telefono
    }   

    function cancelar(e) {
        e.preventDefault();
		e.stopPropagation();
        alActualizar(null)
    }

    async function guardar(e) {
        e.preventDefault();
        e.stopPropagation();
        if (validar()) {
            alActualizar(datos)
        } else {
            alert('Faltan datos, por favor ingresar todos los campos')
        }
    }

    return (
		<section>
			<form>
				<label>
					Nombre:
					<input type='text' name='nombre' value={datos.nombre} onChange={cambiar} />
				</label>
				<label>
					Apellido:
					<input type='text' name='apellido' value={datos.apellido} onChange={cambiar} />
				</label>
				<label>
					Teléfono:
					<input type='text' name='telefono' value={datos.telefono} onChange={cambiar} />
				</label>
				<span>
					<button onClick={cancelar}>Cancelar</button>
					<button onClick={guardar}><b>Guardar</b></button>
				</span>
			</form>
		</section>
	);
}

export default Editar
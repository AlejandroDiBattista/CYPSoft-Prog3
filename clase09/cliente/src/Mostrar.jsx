import { Tarjeta } from './Tarjeta'

function Mostrar({ contacto, alEditar, alBorrar }) {
    const editar = () => alEditar()
    const borrar = () => alBorrar()
    return (
        <Tarjeta>
            <h2>{contacto.nombre} {contacto.apellido}</h2>
            <p>{contacto.telefono}</p>
            <div className="botones">
                <button onClick={editar}>Editar</button>
                <button onClick={borrar}>Borrar</button>
            </div>
        </Tarjeta>
    )
}

export { Mostrar }
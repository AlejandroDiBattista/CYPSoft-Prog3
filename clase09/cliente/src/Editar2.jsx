import { useState } from 'react';
import { Tarjeta } from './Tarjeta';

function Editar({ contacto, setContacto }) {
    const [nombre, setNombre] = useState(contacto.nombre);
    const [apellido, setApellido] = useState(contacto.apellido);
    const [telefono, setTelefono] = useState(contacto.telefono);

    const guardar = () => {
        setContacto({ nombre, apellido, telefono });
    }

    return (
        <Tarjeta>
            <form>

                <h2>Editar contacto</h2>
                <label>Nombre</label>
                <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
                <label>Apellido</label>
                <input type="text" value={apellido} onChange={e => setApellido(e.target.value)} />
                <label>Telefono</label>
                <input type="text" value={telefono} onChange={e => setTelefono(e.target.value)} />
                <div className="botones">
                    <button onClick={guardar}>Aceptar</button>
                    <button onClick={guardar}>Cancelar</button>
                </div>
            </form>
        </Tarjeta>
    )
}

export { Editar }
import { useState } from 'react';
import { Tarjeta } from './Tarjeta';

function Campo({ label, valor, setValor, }) {
    return (
        <>
            <label>{label}</label>
            <input type="text"
                value={valor}
                onChange={e => setValor(e.target.value)} />
        </>
    )
}
function Editar({ contacto, alAceptar, alCancelar }) {
    let [nombre, setNombre] = useState(contacto.nombre);
    let [apellido, setApellido] = useState(contacto.apellido);
    let [telefono, setTelefono] = useState(contacto.telefono);

    const aceptar = (e) => {
        e.preventDefault();
        alAceptar({...contacto, nombre, apellido, telefono });
    }
    const cancelar = (e) => {
        e.preventDefault();
        alCancelar();
    }
    return (
        <Tarjeta>
            <form>
                <h3>Editando</h3>
                <Campo label="Nombre" valor={nombre} setValor={setNombre} />
                <Campo label="Apellido" valor={apellido} setValor={setApellido} />
                <Campo label="Telefono" valor={telefono} setValor={setTelefono} />
                <div className="botones">
                    <button onClick={aceptar}>Aceptar</button>
                    <button onClick={cancelar}>Cancelar</button>
                </div>
            </form>
        </Tarjeta>
    )
}

export { Editar }
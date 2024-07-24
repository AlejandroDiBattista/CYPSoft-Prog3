// cliente/src/paginas/Editar.jsx

import { useState } from 'react';

function Editar({ contacto, alConfirmar }) {
    const [datos, setDatos] = useState(contacto);

    function actualizar(e) {
        const { name, value } = e.target;
        setDatos({ ...datos, [name]: value });
    }

    function esValido() {
        return datos.nombre && datos.apellido && datos.telefono;
    }

    function aceptar(e) {
        e.preventDefault();
        if (!esValido()) {
            alert('Datos incompletos, por favor ingrese todos los campos');
        } else {
            alConfirmar(datos); // Enviar los datos modificados al padre
        }
    }

    function cancelar(e) {
        e.preventDefault();
        alConfirmar(null);
    }

    return (
        <section>
            <form>
                <h3>{datos._id ? 'Editando' : 'Agregando'} contacto</h3>
                <label>
                    Nombre:
                    <input type="text" name="nombre"
                        value={datos.nombre} onChange={actualizar} />
                </label>
                <label>
                    Apellido:
                    <input type="text" name="apellido"
                        value={datos.apellido} onChange={actualizar} />
                </label>
                <label>
                    Teléfono:
                    <input type="text" name="telefono"
                        value={datos.telefono} onChange={actualizar} />
                </label>
                <span>
                    <button onClick={cancelar}>Cancelar</button>
                    <button onClick={aceptar}><b>Aceptar</b></button>
                </span>
            </form>
        </section>
    );
}

export default Editar;

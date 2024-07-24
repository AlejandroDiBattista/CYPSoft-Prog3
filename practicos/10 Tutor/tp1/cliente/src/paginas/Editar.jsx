// Importa useState desde React para manejar el estado local
import { useState } from 'react';

// Componente funcional Editar para editar o agregar un contacto
function Editar({ contacto, alConfirmar }) {
    // Define estado local para los datos del contacto
    const [datos, setDatos] = useState(contacto);

    // Función para actualizar los datos del contacto al cambiar un campo
    function actualizar(e) {
        const { name, value } = e.target;
        setDatos({ ...datos, [name]: value });
    }

    // Función para validar que todos los campos obligatorios estén completos
    function esValido() {
        return datos.nombre && datos.apellido && datos.telefono;
    }

    // Función para manejar el evento de aceptar la edición o adición del contacto
    function aceptar(e) {
        e.preventDefault();
        if (!esValido()) {
            alert('Datos incompletos, por favor ingrese todos los campos');
        } else {
            alConfirmar(datos); // Enviar los datos modificados al componente padre
        }
    }

    // Función para cancelar la edición o adición del contacto
    function cancelar(e) {
        e.preventDefault();
        alConfirmar(null); // Enviar null para indicar cancelación al componente padre
    }

    // Renderiza la estructura JSX del componente Editar
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
                    <button onClick={aceptar}>Aceptar</button>
                </span>
            </form>
        </section>
    );
}


export default Editar;

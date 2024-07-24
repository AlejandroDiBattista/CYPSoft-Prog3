document.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await fetch('/personas');
        if (!response.ok) {
            throw new Error('Error al obtener las personas');
        }
        const personas = await response.json();
        const personasListElement = document.getElementById('personas-list');
        personas.forEach(persona => {
            const personaElement = document.createElement('div');
            let texto = '';
            if (persona.nombre) {
                texto += `Nombre: ${persona.nombre}, `;
            }
            if (persona.apellido) {
                texto += `Apellido: ${persona.apellido}, `;
            }
            if (persona.telefono) {
                texto += `Teléfono: ${persona.telefono}`;
            }

            personaElement.textContent = texto;

            // Crear el botón de eliminación
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', async function() {
                try {
                    const response = await fetch(`/personas/${persona._id}`, {
                        method: 'DELETE',
                    });
                    if (!response.ok) {
                        throw new Error('Error al eliminar persona');
                    }
                    personaElement.remove();
                } catch (error) {
                    console.error('Error:', error);
                }
            });

            // Crear el botón de modificación
            const editButton = document.createElement('button');
            editButton.textContent = 'Modificar';
            editButton.addEventListener('click', function() {
                // Mostrar un formulario de edición
                const editForm = document.createElement('form');
                editForm.innerHTML = `
                    <label>Nombre:
                        <input type="text" name="nombre" value="${persona.nombre || ''}">
                    </label>
                    <label>Apellido:
                        <input type="text" name="apellido" value="${persona.apellido || ''}">
                    </label>
                    <label>Teléfono:
                        <input type="tel" name="telefono" value="${persona.telefono || ''}">
                    </label>
                    <button type="submit">Guardar</button>
                    <button type="button" id="cancelar">Cancelar</button>
                `;
                personaElement.appendChild(editForm);

                editForm.addEventListener('submit', async function(event) {
                    event.preventDefault();
                    const formData = new FormData(editForm);
                    const updatedData = {
                        nombre: formData.get('nombre'),
                        apellido: formData.get('apellido'),
                        telefono: formData.get('telefono')
                    };

                    try {
                        const response = await fetch(`/personas/${persona._id}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(updatedData),
                        });
                        if (!response.ok) {
                            throw new Error('Error al modificar persona');
                        }
                        const updatedPersona = await response.json();
                        personaElement.innerHTML = `
                            Nombre: ${updatedPersona.nombre}, 
                            Apellido: ${updatedPersona.apellido}, 
                            Teléfono: ${updatedPersona.telefono}
                        `;
                        personaElement.appendChild(editButton);
                        personaElement.appendChild(deleteButton);
                    } catch (error) {
                        console.error('Error:', error);
                    }
                });

                editForm.querySelector('#cancelar').addEventListener('click', function() {
                    personaElement.removeChild(editForm);
                    personaElement.appendChild(editButton);
                    personaElement.appendChild(deleteButton);
                });

                personaElement.removeChild(editButton);
                personaElement.removeChild(deleteButton);
            });

            personaElement.appendChild(editButton);
            personaElement.appendChild(deleteButton);
            personasListElement.appendChild(personaElement);
        });
    } catch (error) {
        console.error('Error:', error);
    }

    // Función para manejar el envío del formulario
    document.getElementById('form-agregar').addEventListener('submit', async function(event) {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const telefono = document.getElementById('telefono').value;

        try {
            const response = await fetch('/personas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre, apellido, telefono }),
            });
            if (!response.ok) {
                throw new Error('Error al agregar persona');
            }
            const nuevaPersona = await response.json();

            // Mostrar la nueva persona agregada en la lista
            const personasListElement = document.getElementById('personas-list');
            const personaElement = document.createElement('div');
            let textoNuevaPersona = '';
            if (nuevaPersona.nombre) {
                textoNuevaPersona += `Nombre: ${nuevaPersona.nombre}, `;
            }
            if (nuevaPersona.apellido) {
                textoNuevaPersona += `Apellido: ${nuevaPersona.apellido}, `;
            }
            if (nuevaPersona.telefono) {
                textoNuevaPersona += `Teléfono: ${nuevaPersona.telefono}`;
            }

            personaElement.textContent = textoNuevaPersona;

            // Crear el botón de eliminación
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', async function() {
                try {
                    const response = await fetch(`/personas/${nuevaPersona._id}`, {
                        method: 'DELETE',
                    });
                    if (!response.ok) {
                        throw new Error('Error al eliminar persona');
                    }
                    personaElement.remove();
                } catch (error) {
                    console.error('Error:', error);
                }
            });

            // Crear el botón de modificación
            const editButton = document.createElement('button');
            editButton.textContent = 'Modificar';
            editButton.addEventListener('click', function() {
                // Mostrar un formulario de edición
                const editForm = document.createElement('form');
                editForm.innerHTML = `
                    <label>Nombre:
                        <input type="text" name="nombre" value="${nuevaPersona.nombre || ''}">
                    </label>
                    <label>Apellido:
                        <input type="text" name="apellido" value="${nuevaPersona.apellido || ''}">
                    </label>
                    <label>Teléfono:
                        <input type="tel" name="telefono" value="${nuevaPersona.telefono || ''}">
                    </label>
                    <button type="submit">Guardar</button>
                    <button type="button" id="cancelar">Cancelar</button>
                `;
                personaElement.appendChild(editForm);

                editForm.addEventListener('submit', async function(event) {
                    event.preventDefault();
                    const formData = new FormData(editForm);
                    const updatedData = {
                        nombre: formData.get('nombre'),
                        apellido: formData.get('apellido'),
                        telefono: formData.get('telefono')
                    };

                    try {
                        const response = await fetch(`/personas/${nuevaPersona._id}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(updatedData),
                        });
                        if (!response.ok) {
                            throw new Error('Error al modificar persona');
                        }
                        const updatedPersona = await response.json();
                        personaElement.innerHTML = `
                            Nombre: ${updatedPersona.nombre}, 
                            Apellido: ${updatedPersona.apellido}, 
                            Teléfono: ${updatedPersona.telefono}
                        `;
                        personaElement.appendChild(editButton);
                        personaElement.appendChild(deleteButton);
                    } catch (error) {
                        console.error('Error:', error);
                    }
                });

                editForm.querySelector('#cancelar').addEventListener('click', function() {
                    personaElement.removeChild(editForm);
                    personaElement.appendChild(editButton);
                    personaElement.appendChild(deleteButton);
                });

                personaElement.removeChild(editButton);
                personaElement.removeChild(deleteButton);
            });

            personaElement.appendChild(editButton);
            personaElement.appendChild(deleteButton);
            personasListElement.appendChild(personaElement);

            // Limpiar los campos del formulario después de agregar
            document.getElementById('nombre').value = '';
            document.getElementById('apellido').value = '';
            document.getElementById('telefono').value = '';
        } catch (error) {
            console.error('Error:', error);
        }
    });
});



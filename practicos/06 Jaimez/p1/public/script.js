// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Realiza una solicitud GET para obtener todas las personas desde el servidor
        const response = await fetch('/Hotel/personas');
        if (!response.ok) {
            throw new Error('Error al obtener personas');
        }

        // Convierte la respuesta en un objeto JavaScript
        const personas = await response.json();
        
        // Obtiene el elemento del DOM con el ID 'personas-list'
        const personasListElement = document.getElementById('personas-list');

        // Itera sobre cada persona obtenida
        personas.forEach(persona => {
            // Crea un nuevo elemento 'div' para cada persona
            const personaElement = document.createElement('div');

            // Inicializa una variable para almacenar el texto que se mostrará para cada persona
            let texto = '';
            if (persona.nombre) { texto += `Nombre: ${persona.nombre}, `; }
            if (persona.apellido) { texto += `Apellido: ${persona.apellido}, `; }
            if (persona.telefono) { texto += `Teléfono: ${persona.telefono}`; }

            // Establece el contenido de texto del 'div' de la persona
            personaElement.textContent = texto;

            // Crea un botón para eliminar la persona
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';

            // Agrega un evento 'click' al botón de eliminación
            deleteButton.addEventListener('click', async function() {
                try {
                    // Realiza una solicitud DELETE al servidor para eliminar la persona
                    const response = await fetch(`/Hotel/personas/${persona._id}`, {
                        method: 'DELETE',
                    });
                    if (!response.ok) {
                        throw new Error('Error al eliminar persona');
                    }

                    // Elimina el 'div' de la persona del DOM
                    personaElement.remove();
                } catch (error) {
                    console.error('Error:', error);
                }
            });

            // Crea un botón para modificar la persona
            const editButton = document.createElement('button');
            editButton.textContent = 'Modificar';

            // Agrega un evento 'click' al botón de modificación
            editButton.addEventListener('click', function() {
                // Crea un formulario de edición
                const editForm = document.createElement('form');
                editForm.innerHTML = `
                    <label>Nombre: <input type="text" name="nombre" value="${persona.nombre || ''}"></label>
                    <label>Apellido: <input type="text" name="apellido" value="${persona.apellido || ''}"></label>
                    <label>Teléfono: <input type="text" name="telefono" value="${persona.telefono || ''}"></label>
                    <button type="submit">Guardar</button>
                    <button type="button" id="cancelar">Cancelar</button>
                `;
                personaElement.appendChild(editForm);

                // Agrega un evento 'submit' al formulario de edición
                editForm.addEventListener('submit', async function(event) {
                    event.preventDefault();
                    const formData = new FormData(editForm);
                    const updatedData = {
                        nombre: formData.get('nombre'),
                        apellido: formData.get('apellido'),
                        telefono: formData.get('telefono'),
                    };

                    try {
                        // Realiza una solicitud PUT al servidor para actualizar la persona
                        const response = await fetch(`/Hotel/personas/${persona._id}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(updatedData),
                        });
                        if (!response.ok) {
                            throw new Error('Error al modificar persona');
                        }

                        // Convierte la respuesta en un objeto JavaScript
                        const updatedPersona = await response.json();

                        // Actualiza el contenido del 'div' de la persona con los nuevos datos
                        personaElement.innerHTML = `
                            Nombre: ${updatedPersona.nombre || ''}, 
                            Apellido: ${updatedPersona.apellido || ''}, 
                            Teléfono: ${updatedPersona.telefono || ''}
                        `;
                        personaElement.appendChild(editButton);
                        personaElement.appendChild(deleteButton);
                    } catch (error) {
                        console.error('Error:', error);
                    }
                });

                // Agrega un evento 'click' al botón de cancelar
                editForm.querySelector('#cancelar').addEventListener('click', function() {
                    personaElement.removeChild(editForm);
                    personaElement.appendChild(editButton);
                    personaElement.appendChild(deleteButton);
                });

                // Elimina temporalmente los botones de modificación y eliminación
                personaElement.removeChild(editButton);
                personaElement.removeChild(deleteButton);
            });

            // Añade los botones de modificación y eliminación al 'div' de la persona
            personaElement.appendChild(editButton);
            personaElement.appendChild(deleteButton);

            // Añade el 'div' de la persona al elemento 'personas-list'
            personasListElement.appendChild(personaElement);
        });

    } catch (error) {
        console.error('Error:', error);
    }

    // Agrega un evento 'submit' al formulario de agregar personas
    document.getElementById('form-agregar').addEventListener('submit', async function(event) {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const telefono = document.getElementById('telefono').value;

        try {
            // Realiza una solicitud POST al servidor para agregar una nueva persona
            const response = await fetch('/Hotel/personas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre, apellido, telefono }),
            });
            if (!response.ok) {
                throw new Error('Error al agregar persona');
            }

            // Convierte la respuesta en un objeto JavaScript
            const nuevaPersona = await response.json();

            // Obtiene el elemento del DOM con el ID 'personas-list'
            const personasListElement = document.getElementById('personas-list');
            // Crea un nuevo elemento 'div' para la nueva persona
            const personaElement = document.createElement('div');

            // Inicializa una variable para almacenar el texto que se mostrará para la nueva persona
            let textoNuevaPersona = '';
            if (nuevaPersona.nombre) { textoNuevaPersona += `Nombre: ${nuevaPersona.nombre}, `; }
            if (nuevaPersona.apellido) { textoNuevaPersona += `Apellido: ${nuevaPersona.apellido}, `; }
            if (nuevaPersona.telefono) { textoNuevaPersona += `Teléfono: ${nuevaPersona.telefono}`; }

            // Establece el contenido de texto del 'div' de la nueva persona
            personaElement.textContent = textoNuevaPersona;

            // Crea un botón para eliminar la nueva persona
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';

            // Agrega un evento 'click' al botón de eliminación
            deleteButton.addEventListener('click', async function() {
                try {
                    // Realiza una solicitud DELETE al servidor para eliminar la nueva persona
                    const response = await fetch(`/Hotel/personas/${nuevaPersona._id}`, {
                        method: 'DELETE',
                    });
                    if (!response.ok) {
                        throw new Error('Error al eliminar persona');
                    }

                    // Elimina el 'div' de la nueva persona del DOM
                    personaElement.remove();
                } catch (error) {
                    console.error('Error:', error);
                }
            });

            // Crea un botón para modificar la nueva persona
            const editButton = document.createElement('button');
            editButton.textContent = 'Modificar';

            // Agrega un evento 'click' al botón de modificación
            editButton.addEventListener('click', function() {
                // Crea un formulario de edición
                const editForm = document.createElement('form');
                editForm.innerHTML = `
                    <label>Nombre: <input type="text" name="nombre" value="${nuevaPersona.nombre || ''}"></label>
                    <label>Apellido: <input type="text" name="apellido" value="${nuevaPersona.apellido || ''}"></label>
                    <label>Teléfono: <input type="text" name="telefono" value="${nuevaPersona.telefono || ''}"></label>
                    <button type="submit">Guardar</button>
                    <button type="button" id="cancelar">Cancelar</button>
                `;
                personaElement.appendChild(editForm);

                // Agrega un evento 'submit' al formulario de edición
                editForm.addEventListener('submit', async function(event) {
                    event.preventDefault();
                    const formData = new FormData(editForm);
                    const updatedData = {
                        nombre: formData.get('nombre'),
                        apellido: formData.get('apellido'),
                        telefono: formData.get('telefono'),
                    };

                    try {
                        // Realiza una solicitud PUT al servidor para actualizar la nueva persona
                        const response = await fetch(`/Hotel/personas/${nuevaPersona._id}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(updatedData),
                        });
                        if (!response.ok) {
                            throw new Error('Error al modificar persona');
                        }

                        // Convierte la respuesta en un objeto JavaScript
                        const updatedPersona = await response.json();

                        // Actualiza el contenido del 'div' de la nueva persona con los nuevos datos
                        personaElement.innerHTML = `
                            Nombre: ${updatedPersona.nombre || ''}, 
                            Apellido: ${updatedPersona.apellido || ''}, 
                            Teléfono: ${updatedPersona.telefono || ''}
                        `;
                        personaElement.appendChild(editButton);
                        personaElement.appendChild(deleteButton);
                    } catch (error) {
                        console.error('Error:', error);
                    }
                });

                // Agrega un evento 'click' al botón de cancelar
                editForm.querySelector('#cancelar').addEventListener('click', function() {
                    personaElement.removeChild(editForm);
                    personaElement.appendChild(editButton);
                    personaElement.appendChild(deleteButton);
                });

                // Elimina temporalmente los botones de modificación y eliminación
                personaElement.removeChild(editButton);
                personaElement.removeChild(deleteButton);
            });

            // Añade los botones de modificación y eliminación al 'div' de la nueva persona
            personaElement.appendChild(editButton);
            personaElement.appendChild(deleteButton);

            // Añade el 'div' de la nueva persona al elemento 'personas-list'
            personasListElement.appendChild(personaElement);

            // Limpia los campos del formulario de agregar
            document.getElementById('nombre').value = '';
            document.getElementById('apellido').value = '';
            document.getElementById('telefono').value = '';

        } catch (error) {
            console.error('Error:', error);
        }
    });
});
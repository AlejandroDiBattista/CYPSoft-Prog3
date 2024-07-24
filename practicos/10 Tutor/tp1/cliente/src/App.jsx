import { useState, useEffect } from 'react';
import Datos from './Datos.js';
import Editar from './paginas/Editar.jsx';
import Listar from './paginas/Listar.jsx';

import './App.css';

function App() {
  // Estado para almacenar la lista de contactos y el contacto seleccionado para editar
  const [contactos, setContactos] = useState([]);
  const [contacto, setContacto] = useState(null);

  // Carga la lista de contactos al montar el componente
  useEffect(() => {
    cargar();
  }, []);

  // Función asincrónica para cargar la lista de contactos desde el servidor
  async function cargar() {
    const datos = await Datos.listar();
    setContactos(datos);
  }

  // Función asincrónica para confirmar la creación o modificación de un contacto
  async function confirmar(contacto) {
    if (contacto) {
      if (!contacto._id) {
        // Si no tiene _id, crea un nuevo contacto
        await Datos.crear(contacto);
      } else {
        // Si tiene _id, modifica el contacto existente
        await Datos.modificar(contacto._id, contacto);
      }
      // Recarga la lista de contactos después de crear o modificar
      cargar();
    }
    // Limpia el estado del contacto después de confirmar
    setContacto(null);
  }

  // Funciones para manejar eventos de agregar, eliminar y editar contactos
  async function agregar(contacto) {
    setContacto(contacto);
  }

  async function eliminar(contacto) {
    await Datos.eliminar(contacto._id);
    cargar();
  }

  async function editar(contacto) {
    setContacto(contacto);
  }

  // Renderiza el componente de edición si hay un contacto seleccionado, de lo contrario, renderiza la lista de contactos
  return (
    <>
      {contacto ?
        <Editar contacto={contacto} alConfirmar={confirmar} /> :
        <Listar contactos={contactos} alAgregar={agregar} alEliminar={eliminar} alEditar={editar} />
      }
    </>
  );
}

export default App;

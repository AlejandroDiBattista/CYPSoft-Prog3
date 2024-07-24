// cliente/src/App.jsx

import { useState, useEffect } from 'react';
import Datos from './Datos.js';
import Editar from './paginas/Editar.jsx';
import Listar from './paginas/Listar.jsx';

import './App.css';

function App() {
  const [contactos, setContactos] = useState([]);
  const [contacto, setContacto] = useState(null);

  useEffect(() => { cargar() }, []);

  async function cargar() {
    const datos = await Datos.listar();
    setContactos(datos);
  }

  async function confirmar(contacto) {
    if (contacto) {
      if (!contacto._id) {
        await Datos.crear(contacto);
      } else {
        await Datos.modificar(contacto._id, contacto);
      }
      cargar();
    }
    setContacto(null);
  }

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

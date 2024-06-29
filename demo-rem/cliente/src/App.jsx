import { useState, useEffect } from 'react'
import Datos from './Datos.js'
import Editar from './Editar.jsx'
import Listar from './Listar.jsx'

function App() {
  const [contacto, setContacto] = useState(null)
  const [contactos, setContactos] = useState([])

  async function cargar() {
    let lista = await Datos.listar()
    setContactos(lista)
  }

  useEffect(() => { cargar() }, [])

  async function actualizar(contacto) {
    if (contacto) {
      if(contacto._id) { // Actualizar
        // await Datos.actualizar(contacto)
      } else {           // Agregar
        await Datos.agregar(contacto)
      }
      cargar()
    }
    setContacto(null)
  }

  async function agregar(contacto) {
    setContacto(contacto)
  }

  async function borrar(contacto) {
    await Datos.borrar(contacto._id)
    cargar()
  }

  return (
    <>
      {contacto ?
        <Editar contacto={contacto} alActualizar={actualizar} /> :
        <Listar contactos={contactos} alAgregar={agregar} alBorrar={borrar} />
      }
    </>
  )
}

export default App

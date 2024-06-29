import { useState, useEffect } from 'react'
import Datos from './Datos.js'
import Editar from './paginas/Editar.jsx'
import Listar from './paginas/Listar.jsx'

import './App.css'

function App() {
  let [contactos, setContactos] = useState([])
  let [contacto, setContacto] = useState(null)

  useEffect(() => { cargar() }, [])

  async function cargar() {
    const datos = await Datos.listar()
    setContactos(datos)
  }

  async function confirmar(contacto)  {
    if(contacto) {
      if(!contacto._id) {
        await Datos.crear(contacto)
      }
      cargar()
    }
    setContacto(null)
  }

  async function agregar(contacto) {
    setContacto(contacto)
  }

  async function eliminar(contacto) {
    console.log("Eliminar contacto", contacto._id)
    await Datos.eliminar(contacto._id)
    cargar()
  }
    
  return (
    <>
      {contacto ?
        <Editar contacto={contacto} alConfirmar={confirmar} /> :
        <Listar contactos={contactos} alAgregar={agregar} alEliminar={eliminar} />
      } 
    </>
  )
}

export default App

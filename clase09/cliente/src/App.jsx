import { useState } from 'react'
import './App.css'
import { Mostrar } from './Mostrar'
import { Editar } from './Editar'
import { Agenda } from './Agenda'


const ContactosIniciales =
  [
    { id: 1, nombre: 'Juan',  apellido: 'Perez', telefono: '1234-5678', borrado: false},
    { id: 2, nombre: 'Maria', apellido: 'Gomez', telefono: '8765-4321' , borrado: true},
    { id: 3, nombre: 'Carlos', apellido: 'Lopez', telefono: '4567-8901', borrado: false},
    { id: 4, nombre: 'Ana', apellido: 'Ramirez', telefono: '6543-2109', borrado: false}
  ] 

function proximoId(contactos) {
  let ids = contactos.map(c => c.id)
  return Math.max(...ids) + 1
}

function App() {
  let [contacto, setContacto] = useState({})
  let [contactos, setContactos] = useState(ContactosIniciales)
  let [editando, setEditando] = useState(false)

  const aceptar = (contacto) => {
    if (contacto.id) { // Modificar
      let copia = contactos.map(c => c.id === contacto.id ? contacto : c)
      setContactos(copia)
    } else {  // Alta 
      let id = proximoId(contactos)
      let copia = [...contactos, { ...contacto, id }]
      setContactos(copia)
    }
    setEditando(false)
  }

  const borrar = (id) => { // Baja
    // let copia = contactos.filter(c => c.id !== id)
    let copia = contactos.map(c => c.id === id ? { ...c, borrado: true } : c)

    setContactos(copia)
  }

  const cancelar = () => {
    console.log("Cancelo")
    setEditando(false)
  }

  const agregar = () => {
    setContacto({})
    setEditando(true)
  }

  const editar = (id) => {
    let contacto = contactos.find(c => c.id === id)
    setContacto(contacto)
    setEditando(true)
  }

  let ordenados = contactos.sort((a, b) => a.apellido.localeCompare(b.apellido))
  // ordenados = ordenados.filter(c => !c.borrado)
  return (
    <>
      {editando 
          ? <Editar contacto={contacto} alAceptar={aceptar} alCancelar={cancelar} />
          : <Agenda contactos={ordenados}
            alAgregar={agregar}
            alEditar={editar}
            alBorrar={borrar}
        />
      }
    </>
  )
}

export default App

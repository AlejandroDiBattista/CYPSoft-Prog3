import { useState, useEffect } from 'react'
import Datos from './Datos.js'
import Editar from './Editar.jsx'
import Listar from './Listar.jsx'

function App() {
  function prueba1() {
   fetch('https://xjsonplaceholder.typicode.com/todos/1')
		  .then((response) => response.json())
      .then((json) => console.log(json))
     .catch((error) => console.error(">>>"))
     .finally(() => console.log("Fin")); 
  }

  function dividir(a, b) {
    if (b === 0) {
      throw new Error('No se puede dividir por cero')
    }
    return a / b
  }

  function repartir(a) {
    let b = dividir(10, a)
    return b 
  }

  function probar() {
    try {
      repartir(0)
    } catch (error) {
      if (error.message === 'No se puede dividir por cero')
        console.error('No se puede dividir por cero')
      else
        throw error
    }
  }


  async function prueba() {
    try {  // .then()
      let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      throw new Error('Esto funciono mal') 
      let json = await res.json()
    } catch (error) { // .catch()
      console.error('>>>')
    } finally { // .finally()
      console.log('Fin');
    }
    
      
	}

  return <>
    <button onClick={prueba}>Llamar</button>
  </>
}
function App2() {
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

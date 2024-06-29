import { useState } from 'react';
import './App.css';

function App() {
	const [contactos, setContactos] = useState([]);

	async function traerDatos() {
		let res = await fetch('http://localhost:3000/contactos');
		let data = await res.json();
		setContactos(data);
	}

  async function agregarDatos() {
    let contacto = {
      nombre: 'Juan',
      apellido: 'Perez',
      telefono: '123456789',
    };
    let res = await fetch('http://localhost:3000/contactos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contacto),
    });
    let data = await res.json();
    console.log(data);
  }

  async function borrarDatos(contacto) {
    let res = await fetch('http://localhost:3000/contactos', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contacto),
    });
    let data = await res.json();
    console.log("DELETE", data);
  }
    return (
    <>
      <button onClick={agregarDatos}>Agregar</button>
			<button onClick={traerDatos}>Traer Datos</button>
			{contactos.map((contacto, index) => (
				<div key={index}>
					<h2>
            {contacto.nombre} {contacto.apellido}
					</h2>
					<p>{contacto.telefono}</p>
            <button onClick={() => borrarDatos(contacto)}>Borrar</button>
				</div>
			))}
		</>
	);
}

export default App;

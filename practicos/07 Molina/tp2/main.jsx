const { useState } = React

function Titulo() {
    return <div><h1>Agenda de Contactos</h1></div>
}

function Contacto({ id, nombre, telefono, favorito, alCambiar }) {
    let marcar = (e) => {
        alCambiar(id, !favorito)
        console.log("Marcamos a " + nombre + " como " + favorito)
    }

    return (
        <div className="card">
            <span className="favorito">{favorito && "⭐"}</span>
            <p className="nombre"> {nombre} <i>({id})</i> </p>
            <p>📞{telefono}</p>
            <button onClick={marcar}>{favorito ? "Desmarcar": "Marcar"}</button>
        </div>
    )
}

const ContactosIniciales = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', telefono: "3816224395" },
    { id: 2, nombre: 'Ana', apellido: 'Gómez', telefono: "3816224395" },
    { id: 3, nombre: 'Pedro', apellido: 'García', telefono: "3816224395" },
    { id: 4, nombre: 'Laura', apellido: 'Fernández', telefono: "3816224395" },
    { id: 5, nombre: 'María', apellido: 'López', telefono: "3816224395" },
    { id: 6, nombre: 'Carlos', apellido: 'Ruiz', telefono: "3816224395" },
    { id: 7, nombre: 'Sandra', apellido: 'Díaz', telefono: "3816224395" },
    { id: 8, nombre: 'Pablo', apellido: 'Herrera', telefono: "3816224395" },
    { id: 9, nombre: 'Marta', apellido: 'Molina', telefono: "3816224395" },
    { id: 10, nombre: 'Jorge', apellido: 'Gutierrez', telefono: "3816224395" }
]

function ordenFavoritos(a, b) {
    return a.favorito === b.favorito ? 0 : a.favorito ? -1 : 1
}

function App() {
    let [contactos, setContactos] = useState(ContactosIniciales)

    let cambiar = (id, favorito) => {
        let copia = contactos.map( contacto => contacto.id === id ? { ...contacto, favorito } : contacto )
        setContactos(copia)
    }

    contactos.sort(ordenFavoritos)
    return (
        <div>
            <Titulo />
            {contactos.map(contacto => <Contacto key={contacto.id} {...contacto} alCambiar={cambiar} />)}
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
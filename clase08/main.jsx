const { useState } = React  

// Ejemplo de uso de useState 
function inicial(){
    console.log("Al iniciar")
    return 0
}

function Contador(){
    let [contador, setContador] = useState( () => inicial() ) 
    // () => inicial() es una función que se ejecuta una sola vez al inicio
    let incrementar = () => {
        setContador(contador => contador + 1) // (contador => contador + 1) es una función que recibe el valor anterior y devuelve el nuevo valor
        setContador(contador => contador + 1)
        setContador(contador => contador + 1)
    }

    return (
        <div className="card">
            <p>Contador: {contador}</p>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}

function Titulo() {
    return <div>Agenda</div>
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
    { id:1, nombre: "Juan",  telefono: "200001", favorito: true },
    { id:2, nombre: "Maria", telefono: "200002", favorito: false},
    { id:3, nombre: "Pedro", telefono: "200003", favorito: false},
    { id:4, nombre: "Ana",   telefono: "200004", favorito: true },
    { id:5, nombre: "Luis",  telefono: "200005", favorito: false},
    { id:6, nombre: "Eva",   telefono: "200006", favorito: true },
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
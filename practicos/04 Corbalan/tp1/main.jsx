const { useState } = React

function Contacto({id, nombre, apellido, telefono, favorito, alCambiar }){
    let marca = (e)=>{
        alCambiar(id, !favorito)
        console.log('marcamos a ' + nombre + 'como' + favorito)
    }

    return(
        <div>
            <ul>

                
                    <li key={id}>
                        <span className="favorito">{favorito && "⭐"}</span>
                        <p><b>Nombre:</b> {nombre}</p>
                        <p><b>Apellido:</b> {apellido}</p>
                        <p><b>Telefono:</b> {telefono}</p>
                        <button onClick={marca}>{favorito ? "Desmarcar favorito": "Favorito"}</button>
                    </li>
            
            </ul> 
        </div>
    );
}

function ordenFavoritos(a, b) {
    return a.favorito === b.favorito ? 0 : a.favorito ? -1 : 1
}


function App() {
    const contactos = [
        {id:1, nombre: 'Jose', apellido: 'Martinez', telefono: 3415673422,  favorito: false},
        {id:2, nombre: 'Luis', apellido: 'Gimenez', telefono: 3415673421, favorito: false},
        {id:3, nombre: 'Maria', apellido: 'Gomez', telefono: 3415673422, favorito: false},
        {id:4, nombre: 'Lucas', apellido: 'Perez', telefono: 3415673422, favorito: false},
        {id:5, nombre: 'Amanda', apellido: 'Roca', telefono: 3415673422, favorito: false},
        {id:6, nombre: 'Josefina', apellido: 'Benitez', telefono: 3415673422, favorito: false},
        {id:7, nombre: 'Pedro', apellido: 'Sanches', telefono: 3415673422, favorito: false},
        {id:8, nombre: 'Alberto', apellido: 'Mansilla', telefono: 3415673422, favorito: false},
        {id:9, nombre: 'Jorge', apellido: 'Figueroa', telefono: 3415673422, favorito: false},
        {id:10, nombre: 'Marcela', apellido: 'Garcia', telefono: 3415673422, favorito: false}
    ]

    let [persona, setPersona] = useState(contactos)

    let cambio = (id, favorito) => {
        let copiar= persona.map( contacto => contacto.id === id ? { ...contacto, favorito } : contacto )
        setPersona(copiar)
    }

    persona.sort(ordenFavoritos)
    return (
        <div>
            <h1>Contactos</h1>
            {persona.map(contacto => <Contacto key={contacto.id} {...contacto} alCambiar={cambio} />)}
        </div>
    )


    
}



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
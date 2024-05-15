
function App() {
    const contactos = [
        {id:1, nombre: 'Jose', apellido: 'Martinez', telefono: 3415673422},
        {id:2, nombre: 'Luis', apellido: 'Gimenez', telefono: 3415673421},
        {id:3, nombre: 'Maria', apellido: 'Gomez', telefono: 3415673422},
        {id:4, nombre: 'Lucas', apellido: 'Perez', telefono: 3415673422},
        {id:5, nombre: 'Amanda', apellido: 'Roca', telefono: 3415673422},
        {id:6, nombre: 'Josefina', apellido: 'Benitez', telefono: 3415673422},
        {id:7, nombre: 'Pedro', apellido: 'Sanches', telefono: 3415673422},
        {id:8, nombre: 'Alberto', apellido: 'Mansilla', telefono: 3415673422},
        {id:9, nombre: 'Jorge', apellido: 'Figueroa', telefono: 3415673422},
        {id:10, nombre: 'Marcela', apellido: 'Garcia', telefono: 3415673422}
    ]
    return(
        <div>
            <h1>Contactos</h1>
            <ul>
                {contactos.map((Contacto, id)=>(
                    <li key={id}>
                        <p><b>Nombre:</b> {Contacto.nombre}</p>
                        <p><b>Apellido:</b> {Contacto.apellido}</p>
                        <p><b>Telefono:</b> {Contacto.telefono}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
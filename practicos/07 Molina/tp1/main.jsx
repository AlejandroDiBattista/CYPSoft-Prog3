// practicos/ Molina/tp1/main.jsx

function App() {
    let contactos = [
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
    ];

    const Contacto = ({ contacto: { nombre, apellido, telefono } }) => (
        <li>{nombre} <b>{apellido}</b>{telefono} </li>
    );

    const Agenda = ({ contactos }) => (
        <ul>
            {contactos.map(c => <Contacto contacto={c}/>)}
        </ul>
    );

    return (
        <div>
            <Agenda contactos={contactos} />
        </div>
    );
}

export default App;


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
function App() {
    return (
        <div>
            <h1>AGENDA DE CONTACTOS</h1>
            <ContactList contacts={contacts} />
        </div>
    );
}

const contacts = [
    { id: 1, nombre: 'Nicolas', apellido: 'Cutone', telefono: '6582478' },
    { id: 2, nombre: 'Joel', apellido: 'Corbalan', telefono: '6587459' },
    { id: 3, nombre: 'Agustina', apellido: 'Acevedo', telefono: '6584498'  },
    { id: 4, nombre: 'Lucas', apellido: 'Aguilar', telefono: '6985247' },
    { id: 5, nombre: 'Facundo', apellido: 'vizcarra', telefono: '9856324' },
    { id: 6, nombre: 'Pablo', apellido: 'Andrara', telefono: '9632587' },
    { id: 7, nombre: 'Benjamin', apellido: 'Segura', telefono: '5829637'   },
    { id: 8, nombre: 'Josue', apellido: 'Jaime', telefono: '7458965' },
    { id: 9, nombre: 'Victor', apellido: 'Molina', telefono: '6985478' },
    { id: 10, nombre: 'Jhonatan', apellido: 'Romano', telefono: '1254789' },
    { id: 11, nombre: 'Diego', apellido: 'Tutor', telefono: '7453789' },
    { id: 12, nombre: 'Cecilia', apellido: 'Rojas', telefono: '4638567' },

];

function ContactCard({ contact }) {
    return (
        <div  className="contact-card">
            <h3>{contact.nombre} {contact.apellido}</h3>
            <p>ID: {contact.id}</p>
            <p>Teléfono: {contact.telefono}</p>
        </div>
    );
}

function ContactList({ contacts }) {
    return (
        <div className="contact-list">
            {contacts.map(contact => (
                <ContactCard key={contact.id} contact={contact} />
            ))}
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
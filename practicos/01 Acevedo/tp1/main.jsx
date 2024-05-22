function App() {
    return (
        <div>
            <h1>AGENDA DE CONTACTOS</h1>
            <ContactList contacts={contacts} />
        </div>
    );
}

const contacts = [
    { id: 1,nombre: 'Agustina', apellido: 'Acevedo', telefono: '4278963' },
    { id: 2, nombre: 'Vanessa', apellido: 'Gomez', telefono: '6726393' },
    { id: 3, nombre: 'Tatiana', apellido: 'Loria', telefono: '4268793'  },
    { id: 4, nombre: 'Abigail', apellido: 'Romano', telefono: '4278989' },
    { id: 5, nombre: 'Celeste', apellido: 'Suarez', telefono: '2489222' },
    { id: 6, nombre: 'Sandra', apellido: 'Diaz', telefono: '7876732' },
    { id: 7, nombre: 'Martina', apellido: 'Martínez', telefono: '6787262'   },
    { id: 8, nombre: 'Lucíana', apellido: 'Fernández', telefono: '8382792' },
    { id: 9, nombre: 'Martin', apellido: 'García', telefono: '6372689' },
    { id: 10, nombre: 'Esteban', apellido: 'Díaz', telefono: '2787389' },
];

function ContactCard({ contact }) {
    return (
        <div className="contact-card">
            <h2>{contact.nombre} {contact.apellido}</h2>
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
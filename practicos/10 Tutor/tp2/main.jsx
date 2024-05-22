const { useState } = React;

function Tarjeta({ id, nombre, apellido, telefono, esFavorito, toggleFavorito }) {
  const mostrarAlerta = () => {
    alert(`Llamando a: ${nombre} ${apellido}`);
  };

  return (
    <div className="tarjeta">
      <span className="icono-llamada" onClick={mostrarAlerta}>☎</span>
      <div className="info-contacto">
        <div className="nombre">Nombre: {nombre} {apellido}</div>
        <div className="telefono">Teléfono: {telefono}</div>
      </div>
      <button 
        className={`favorito-btn ${esFavorito ? "favorito" : "no-favorito"}`} 
        onClick={() => toggleFavorito(id)}>
        {esFavorito ? "★" : "☆"}
      </button>
    </div>
  );
}

function Agenda() {
  const [contactos, setContactos] = useState([
    { id: 1, nombre: "Agustina", apellido: "Acevedo", telefono: "123456-0789", esFavorito: false },
    { id: 2, nombre: "Lucas", apellido: "Aguilar", telefono: "987-654-3321", esFavorito: false },
    { id: 3, nombre: "Pablo", apellido: "Andrada", telefono: "18-654-3791", esFavorito: false },
    { id: 4, nombre: "Joel", apellido: "Corbalan", telefono: "647-290-1348", esFavorito: false },
    { id: 5, nombre: "Nicolas", apellido: "Cutone", telefono: "876-130-8097", esFavorito: false },
    { id: 6, nombre: "Victor", apellido: "Molina", telefono: "381-571-2881", esFavorito: false },
    { id: 7, nombre: "Josue", apellido: "Jaime", telefono: "381-694-2881", esFavorito: false },
    { id: 8, nombre: "Jonathan", apellido: "Romano", telefono: "381-999-5020", esFavorito: false },
    { id: 9, nombre: "Benja", apellido: "Segura", telefono: "351-320-8965", esFavorito: false },
    { id: 10, nombre: "Diego", apellido: "Tutor", telefono: "381-759-6254", esFavorito: false },
    { id: 11, nombre: "Facundo", apellido: "Vizcarra", telefono: "11-873-6408", esFavorito: false },
  ]);

  const toggleFavorito = (id) => {
    setContactos(contactos.map(contacto =>
      contacto.id === id ? { ...contacto, esFavorito: !contacto.esFavorito } : contacto
    ));
  };

  const contactosOrdenados = [...contactos].sort((a, b) => {
    if (a.esFavorito === b.esFavorito) {
      const nombreA = `${a.apellido} ${a.nombre}`.toLowerCase();
      const nombreB = `${b.apellido} ${b.nombre}`.toLowerCase();
      return nombreA.localeCompare(nombreB);
    }
    return a.esFavorito ? -1 : 1;
  });

  return (
    <div className="agenda">
      {contactosOrdenados.map(contacto => (
        <Tarjeta key={contacto.id} {...contacto} toggleFavorito={toggleFavorito} />
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Agenda />);
function Tarjeta({ id, nombre, apellido, telefono }) {
  const mostrarAlerta = () => {
    alert(`Llamando a: ${nombre} ${apellido}`);
  };

  return (
    <div className="tarjeta" onClick={mostrarAlerta}>
      <div className="nombre">
        {nombre} {apellido}
      </div>
      <div className="telefono">{telefono}</div>
      <span className="icono-llamada">☎</span>
    </div>
  );
}

function Agenda() {
  
  const contactos = [
    { id: 1, nombre: "Juan", apellido: "Pérez", telefono: "1234560789" },
    { id: 2, nombre: "Ana", apellido: "García", telefono: "9876543321" },
    { id: 3, nombre: "Pedro", apellido: "Gonzalez", telefono: "186543791" },
    { id: 4, nombre: "Laura", apellido: "Fernández", telefono: "6472901348" },
    { id: 5, nombre: "María", apellido: "Lopez", telefono: "8761308097" },
    { id: 6, nombre: "Carlos", apellido: "Martinez", telefono: "3815712881" },
    { id: 7, nombre: "Sandra", apellido: "Gutierrez", telefono: "3816942881" },
    { id: 8, nombre: "Alejandro", apellido: "Battista", telefono: "3819995020" },
    { id: 9, nombre: "Lucas", apellido: "Rojas", telefono: "3513208965" },
    { id: 10, nombre: "Luis", apellido: "Carranza", telefono: "3817596254" },
  ];

  return (
    <div className="agenda">
      {contactos.map((contacto) => (
        <Tarjeta key={contacto.id} {...contacto} />
      ))}
    </div>
  );
} 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Agenda />);

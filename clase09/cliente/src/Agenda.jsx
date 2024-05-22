import { Mostrar } from './Mostrar';

function Agenda({ contactos,alAgregar, alEditar, alBorrar}) {
  return (
    <div>
      <h1>Agenda </h1>
      <button onClick={() => alAgregar()}>Agregar</button>
      {contactos.length === 0 && <h2>No hay contactos</h2>}
      {
        contactos.map(contacto =>
          <Mostrar
            key={contacto.id}
            contacto={contacto}
            alEditar={() => alEditar(contacto.id)}
            alBorrar={() => alBorrar(contacto.id)}
          />)
      }
    </div>
  );
}

export { Agenda };
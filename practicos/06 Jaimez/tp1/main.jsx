let contactos = [
  { id: 1, nombre: 'Josue', apellido: 'Jaimez', telefono: '381-204-2842' },
  { id: 2, nombre: 'Marcelo', apellido: 'Bautista', telefono: '381-352-2164' },
  { id: 3, nombre: 'Nicolas', apellido: 'García', telefono: '381-523-6783' },
  { id: 4, nombre: 'Juana', apellido: 'Ruiz', telefono: '381-247-5351' },
  { id: 5, nombre: 'Pamela', apellido: 'Juarez', telefono: '381-351-2789' },
  { id: 6, nombre: 'Carlos', apellido: 'Martínez', telefono: '381-864-3466' },
  { id: 7, nombre: 'Sofía', apellido: 'Rodríguez', telefono: '381-854-3267' },
  { id: 8, nombre: 'Luis', apellido: 'Sánchez', telefono: '381-654-0978' },
  { id: 9, nombre: 'Elena', apellido: 'Díaz', telefono: '381-462-9372' },
  { id: 10, nombre: 'Diego', apellido: 'Ruiz', telefono: '381-352-1034' },
];

const Contacto = ({ contacto: { nombre, apellido, telefono } }) => (
  <li>
    {nombre} <b>{apellido}</b> {telefono}
  </li>
);

const Agenda = ({ contactos }) => (
  <ul>
    {contactos.map(c => <Contacto contacto={c} />)}
  </ul>
);

ReactDOM.render(
  <Agenda contactos={contactos} />, document.getElementById('root')
);

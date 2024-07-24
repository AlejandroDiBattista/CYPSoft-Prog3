import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/contactos');
      console.log('Fetched contacts:', response.data);
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateContact();
    } else {
      await addContact();
    }
  };

  const addContact = async () => {
    try {
      await axios.post('http://localhost:3000/contactos', { nombre, telefono, correo });
      fetchContacts();
      setNombre('');
      setTelefono('');
      setCorreo('');
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  const updateContact = async () => {
    try {
      console.log('Datos enviados para actualizar:', { nombre, telefono, correo });
      await axios.put(`http://localhost:3000/contactos/${editingId}`, { nombre, telefono, correo });
      fetchContacts();
      setNombre('');
      setTelefono('');
      setCorreo('');
      setEditingId(null);
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/contactos/${id}`);
      fetchContacts();
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const editContact = (contact) => {
    setNombre(contact.nombre);
    setTelefono(contact.telefono);
    setCorreo(contact.correo);
    setEditingId(contact._id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Agenda de Contactos</h1>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            pattern="[0-9]*"
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          <button type="submit">
            {editingId ? 'Actualizar Contacto' : 'Agregar Contacto'}
          </button>
        </form>

        <ul>
          {contacts.map((contact) => (
            <li key={contact._id}>
              {contact.nombre} - {contact.telefono} - {contact.correo}
              <button onClick={() => editContact(contact)}>Editar</button>
              <button onClick={() => deleteContact(contact._id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

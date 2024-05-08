// Confirmar.js
import React from 'react';   // Importamos React
import Boton from './Boton'; // Importamos el componente Boton

const Confirmar = ({pregunta, alConfirmar}) => (
    <div>
      <p>{pregunta}</p>
      <Boton onClick={() => alConfirmar(true)}>Aceptar</Boton>
      <Boton onClick={() => alConfirmar(false)}>Cancelar</Boton>
    </div>
  )

// Exportamos el componente Confirmar
export default Confirmar;

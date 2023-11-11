import React, { useState } from 'react';

function Comentario() {
  const [comentario, setComentario] = useState('');
  const [mensajeExito, setMensajeExito] = useState(''); // Nuevo estado para el mensaje de éxito

  const handleChange = (e) => {
    setComentario(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Comentario enviado:', comentario);
    setComentario(''); // Limpiar el campo de texto después de enviar
    setMensajeExito('¡Genial, comentario enviado!'); // Establecer el mensaje de éxito
  };

  return (
    <div className="comentario-container">
      <form onSubmit={handleSubmit}>
        <h2>Escribe tu Comentario</h2>
        <textarea
          value={comentario}
          onChange={handleChange}
          placeholder="Deja tu comentario aquí"
          rows="4"
        ></textarea>
        <button type="submit">Enviar Comentario</button>
        {mensajeExito && <p className="mensaje-exito">{mensajeExito}</p>}
      </form>
    </div>
  );
}

export default Comentario;

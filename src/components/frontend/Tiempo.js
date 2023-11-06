import React, { useState } from 'react';
import './css/Procesos.css';

function Tiempo() {
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFinalizacion, setFechaFinalizacion] = useState('');
  const [monedaProyecto, setMonedaProyecto] = useState('');
  const [moneda, setMoneda] = useState('');
  const [presupuestoRango, setPresupuestoRango] = useState(''); // Valor inicial del rango de presupuesto
  const [comentarios, setComentarios] = useState('');

  const monedaSymbols = {
    EUR: '€',
    USD: '$',
    GBP: '£',
    JPY: '¥',
    CAD: 'CAD$',
    AUD: 'AUD$',
    CHF: 'Fr.',
    INR: '₹',
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      fechaInicio,
      fechaFinalizacion,
      monedaProyecto,
      moneda,
      presupuestoRango,
      comentarios,
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Formulario de Tiempo</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Fecha Estimada de Inicio de Proyecto:</label>
          <input
            type="date"
            className="date-input"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Fecha Deseada de Finalización:</label>
          <input
            type="date"
            className="date-input"
            value={fechaFinalizacion}
            onChange={(e) => setFechaFinalizacion(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label>Moneda:</label>
          <select
            className="date-inputo"
            value={moneda}
            onChange={(e) => setMoneda(e.target.value)}
          >
            <option value="">Seleccione una moneda</option>
            <option value="EUR">Euros (EUR)</option>
            <option value="USD">Dólares (USD)</option>
            <option value="GBP">Libras (GBP)</option>
            <option value="JPY">Yenes (JPY)</option>
            <option value="CAD">Dólares canadienses (CAD)</option>
            <option value="AUD">Dólares australianos (AUD)</option>
            <option value="CHF">Francos suizos (CHF)</option>
            <option value="INR">Rupias indias (INR)</option>
          </select>
        </div>
        <div className="form-field">
          <label>Presupuesto Estimado:</label>
          <select
            className="date-inputo"
            value={presupuestoRango}
            onChange={(e) => setPresupuestoRango(e.target.value)}
          >
            <option value="">Seleccione un rango de presupuesto</option>
            <option value="500-1000">500 - 1000</option>
            <option value="1000-3000">1000 - 3000</option>
            <option value="3000-5000">3000 - 5000</option>
            <option value="5000-10000">5000 - 10000</option>
            <option value="10000+">Más de 10000</option>
          </select>
        </div>

        <div className="form-field">
          <label>Comentarios Adicionales:</label>
          <input
            className="form-fieldo"
            type="text"
            value={comentarios}
            onChange={(e) => setComentarios(e.target.value)}
          />
        </div>
        <button className="next-button" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Tiempo;

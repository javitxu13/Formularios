import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'; // Importa Navigate desde react-router-dom
import './css/Procesos.css';

function HerramientasSoftware() {
  const [trabajaConERP, setTrabajaConERP] = useState('No');
  const [erpSeleccionado, setErpSeleccionado] = useState('');
  const [trabajaConCRM, setTrabajaConCRM] = useState('No');
  const [crmSeleccionado, setCrmSeleccionado] = useState('');
  const [trabajaConSuite, setTrabajaConSuite] = useState('No');
  const [suiteSeleccionada, setSuiteSeleccionada] = useState('');
  const [otrasHerramientas, setOtrasHerramientas] = useState({
    ChatGPT: false,
    Airtable: false,
    Notion: false,
    Zoom: false,
    Slack: false,
    Figma: false,
    Miro: false,
    Calendly: false,
    ClickUp: false,
    Asana: false,
  });

  const [redirect, setRedirect] = useState(false);

  const handleSelectChange = (value, stateSetter) => {
    stateSetter(value);
  };

  const handleInputChange = (e, stateSetter) => {
    stateSetter(e.target.value);
  };

  const handleOtrasHerramientasChange = (herramienta) => {
    setOtrasHerramientas({ ...otrasHerramientas, [herramienta]: !otrasHerramientas[herramienta] });
  };

  const renderTextInput = (label, value, onChange) => {
    return (
      <div>
        <label>{label}</label>
        <input type="text" value={value} onChange={onChange} />
      </div>
    );
  };

  const handleSiguienteClick = () => {
    // Realiza alguna lógica si es necesario
    // Por ejemplo, guardar los datos del formulario en el estado global antes de redirigir
    setRedirect(true);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Formulario de Herramientas de Software</h2>

      <div className="form-field">
        <label>¿Trabajáis con ERP?</label>
        <select value={trabajaConERP} onChange={(e) => handleSelectChange(e.target.value, setTrabajaConERP)}>
          <option value="No">No</option>
          <option value="Sí">Sí</option>
        </select>
        {trabajaConERP === 'Sí' && renderTextInput('¿Cuál?', erpSeleccionado, (e) => handleInputChange(e, setErpSeleccionado))}
      </div>

      <div className="form-field">
        <label>¿Trabajáis con CRM?</label>
        <select value={trabajaConCRM} onChange={(e) => handleSelectChange(e.target.value, setTrabajaConCRM)}>
          <option value="No">No</option>
          <option value="Sí">Sí</option>
        </select>
        {trabajaConCRM === 'Sí' && renderTextInput('¿Cuál?', crmSeleccionado, (e) => handleInputChange(e, setCrmSeleccionado))}
      </div>

      <div className="form-field">
        <label>¿Trabajáis con suite de productividad?</label>
        <select value={trabajaConSuite} onChange={(e) => handleSelectChange(e.target.value, setTrabajaConSuite)}>
          <option value="No">No</option>
          <option value="Sí">Sí</option>
        </select>
        {trabajaConSuite === 'Sí' && renderTextInput('¿Cuál?', suiteSeleccionada, (e) => handleInputChange(e, setSuiteSeleccionada))}
      </div>
      <div className="herramientas">
  {Object.keys(otrasHerramientas).map((herramienta) => (
    <div
      key={herramienta}
      className={`herramienta ${otrasHerramientas[herramienta] ? 'selected' : ''}`}
      onClick={() => handleOtrasHerramientasChange(herramienta)}
    >
      {herramienta}
    </div>
  ))}
</div>

      <button className="next-button" type="button" onClick={handleSiguienteClick}>
        Siguiente
      </button>

      {redirect && <Navigate to="/procesos" />}
    </div>
  );
}

export default HerramientasSoftware;

import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './css/Procesos.css';

function HerramientasSoftware() {
  const [trabajaConERP, setTrabajaConERP] = useState('No');
  const [erpSeleccionado, setErpSeleccionado] = useState('');
  const [trabajaConCRM, setTrabajaConCRM] = useState('No');
  const [crmSeleccionado, setCrmSeleccionado] = useState('');
  const [trabajaConSuite, setTrabajaConSuite] = useState('No');
  const [suiteSeleccionada, setSuiteSeleccionada] = useState('');
  const [suiteEspecifica, setSuiteEspecifica] = useState('');
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

  const descripcionHerramientas = "Las herramientas de software como ChatGPT, Airtable, y otras, son esenciales para mejorar la eficiencia, la colaboración y la gestión de proyectos en un negocio. Facilitan la automatización de tareas, el análisis de datos y la comunicación entre equipos.";
  const suitesDeProductividad = ["Microsoft 365","Google Workspace","Zoho Workplace", "Apple iWork", "Otro"];

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
    setRedirect(true);
  };

  const renderOtrasHerramientas = () => {
    return (
      <div className="herramientas">
        <div className="titulo-herramientas">
          <h3>Otras Herramientas</h3>
          <div className="info-icon">
            i
            <span className="tooltip">{descripcionHerramientas}</span>
          </div>
        </div>
        <div className="herramientas-container">
          {Object.keys(otrasHerramientas).map(herramienta => (
            <div key={herramienta} className="herramienta-container">
              <div 
                className={`herramienta ${otrasHerramientas[herramienta] ? 'selected' : ''}`}
                onClick={() => handleOtrasHerramientasChange(herramienta)}
              >
                {herramienta}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }    
  
  

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
        <select className='suite' value={trabajaConSuite} onChange={(e) => handleSelectChange(e.target.value, setTrabajaConSuite)}>
          <option value="No">No</option>
          <option value="Sí">Sí</option>
        </select>
        {trabajaConSuite === 'Sí' && (
          <div>
            <label>Selecciona la suite de productividad:</label>
            <select className='suite' value={suiteSeleccionada} onChange={(e) => handleInputChange(e, setSuiteSeleccionada)}>
              {suitesDeProductividad.map(suite => (
                <option key={suite} value={suite}>{suite}</option>
              ))}
            </select>
            {suiteSeleccionada === 'Otro' && renderTextInput('Especifica la suite de productividad:', suiteEspecifica, (e) => handleInputChange(e, setSuiteEspecifica))}
          </div>
        )}
      </div>

      {renderOtrasHerramientas()}

      <button className="next-button" type="button" onClick={handleSiguienteClick}>
        Siguiente
      </button>

      {redirect && <Navigate to="/procesos" />}
    </div>
  );
}

export default HerramientasSoftware;

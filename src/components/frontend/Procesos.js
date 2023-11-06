import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import './css/Procesos.css';
import artImage from '../img/art.png';

class ProcessAutomationComponent extends Component {
  constructor() {
    super();
    this.state = {
      currentStage: 1,
      nombreProceso: '',
      personasIntervienen: '',
      tiempoEstimado: '',
      herramientasIntervienen: '',
      procesosAgregados: [],
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleNext = () => {
    this.setState((prevState) => ({
      currentStage: prevState.currentStage + 1,
    }));
  }

  handleAddProcess = () => {
    const { nombreProceso, personasIntervienen, tiempoEstimado, herramientasIntervienen } = this.state;
    const procesoActual = {
      nombreProceso,
      personasIntervienen,
      tiempoEstimado,
      herramientasIntervienen,
    };

    this.setState((prevState) => ({
      procesosAgregados: [...prevState.procesosAgregados, procesoActual],
      nombreProceso: '',
      personasIntervienen: '',
      tiempoEstimado: '',
      herramientasIntervienen: '',
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  renderStage1Form() {
    const { nombreProceso, personasIntervienen, tiempoEstimado, herramientasIntervienen } = this.state;

    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <h2 className="form-title">Formulario de Automatización de Procesos</h2>
        <div className="form-field">
          <input
            type="text"
            name="nombreProceso"
            value={nombreProceso}
            onChange={this.handleChange}
            placeholder="Nombre del proceso"
          />
        </div>
        <div className="form-field">
          <input
            className="date-input"
            type="number"
            name="personasIntervienen"
            value={personasIntervienen}
            onChange={this.handleChange}
            placeholder="Personas que intervienen"
          />
        </div>
        <div className="form-field">
          <input
            className="date-input"
            type="number"
            name="tiempoEstimado"
            value={tiempoEstimado}
            onChange={this.handleChange}
            placeholder="Tiempo estimado"
          />
        </div>
        <div className="form-field">
          <input
            type="text"
            name="herramientasIntervienen"
            value={herramientasIntervienen}
            onChange={this.handleChange}
            placeholder="Herramientas que intervienen"
          />
        </div>
        {this.state.currentStage === 1 && (
          <div>
            <button type="button" className="next-button" onClick={this.handleAddProcess}>
              Añadir Proceso
            </button>
            <button type="button" className="next-button" onClick={this.handleNext}>
              Siguiente
            </button>
          </div>
        )}
      </form>
    );
  }

  renderProcesosTable() {
    const { procesosAgregados } = this.state;

    if (procesosAgregados.length === 0) {
      return null;
    }

    return (
      <div>
        <h2>Procesos Agregados:</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre del Proceso</th>
              <th>Personas que Intervienen</th>
              <th>Tiempo Estiimado</th>
              <th>Herramientas que Intervienen</th>
            </tr>
          </thead>
          <tbody>
            {procesosAgregados.map((proceso, index) => (
              <tr key={index}>
                <td>{proceso.nombreProceso}</td>
                <td>{proceso.personasIntervienen}</td>
                <td>{proceso.tiempoEstimado}</td>
                <td>{proceso.herramientasIntervienen}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    const { currentStage } = this.state;

    if (currentStage === 2) {
      return <Navigate to="/siguiente-formulario" />;
    }

    return (
      <div>
        {currentStage === 1 && this.renderStage1Form()}
        {this.renderProcesosTable()}
      </div>
    );
  }
}

export default ProcessAutomationComponent;

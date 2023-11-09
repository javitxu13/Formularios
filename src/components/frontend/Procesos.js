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
      editingIndex: null, // Track the index of the process being edited.
      showToolsInput: false, // New state variable
      herramientasList: [], // New state variable to store the list of tools
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  toggleToolsInput = () => {
    this.setState((prevState) => ({
      showToolsInput: !prevState.showToolsInput,
    }));
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

  handleEdit = (index) => {
    const selectedProcess = this.state.procesosAgregados[index];
    this.setState({
      currentStage: 1,
      nombreProceso: selectedProcess.nombreProceso,
      personasIntervienen: selectedProcess.personasIntervienen,
      tiempoEstimado: selectedProcess.tiempoEstimado,
      herramientasIntervienen: selectedProcess.herramientasIntervienen,
      editingIndex: index,
    });
  }

  handleSaveEdit = () => {
    const { nombreProceso, personasIntervienen, tiempoEstimado, herramientasIntervienen, editingIndex } = this.state;
    const updatedProcess = {
      nombreProceso,
      personasIntervienen,
      tiempoEstimado,
      herramientasIntervienen,
    };

    this.setState((prevState) => ({
      procesosAgregados: prevState.procesosAgregados.map((process, index) =>
        index === editingIndex ? updatedProcess : process
      ),
      nombreProceso: '',
      personasIntervienen: '',
      tiempoEstimado: '',
      herramientasIntervienen: '',
      editingIndex: null,
    }));
  }

  handleGuardarHerramienta = () => {
    const { herramientasIntervienen } = this.state;

    // Check if herramientasIntervienen is not empty before saving
    if (herramientasIntervienen.trim() !== '') {
      this.setState((prevState) => ({
        herramientasList: [...prevState.herramientasList, herramientasIntervienen],
        herramientasIntervienen: '', // Clear the input field
        showToolsInput: false,
      }));
    }
  }

  renderStage1Form() {
    const { nombreProceso, personasIntervienen, tiempoEstimado, herramientasIntervienen, showToolsInput, herramientasList } = this.state;

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
          <label>Herramientas que Intervienen</label>
          {showToolsInput ? (
            <div>
              <input
                type="text"
                name="herramientasIntervienen"
                value={herramientasIntervienen}
                onChange={this.handleChange}
                placeholder="Añadir herramienta"
              />
              <div>
                <button type="button" onClick={this.toggleToolsInput}>Cancelar</button>
                <button type="button" onClick={this.handleGuardarHerramienta}>Guardar</button>
              </div>
            </div>
          ) : (
            <div>
              <div className="tools-title"></div>
              <button type="button" onClick={this.toggleToolsInput}>+</button>
              {herramientasList.length > 0 && (
                <div className="added-tools">
                  <p>Herramientas añadidas:</p>
                  <ul>
                    {herramientasList.map((tool, index) => (
                      <li key={index}>{tool}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
        {this.state.currentStage === 1 && (
          <div>
            <button type="button" className="next-buttono" onClick={this.handleAddProcess}>
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

  // Dentro del método renderProcesosTable
renderProcesosTable() {
  const { procesosAgregados, editingIndex, herramientasList } = this.state;

  if (procesosAgregados.length === 0) {
    return null;
  }

  return (
    <div className="form-containero">
      <h2 className="form-title">Procesos Agregados:</h2>
      <table className="table">
        <thead className="thead">
          <tr className="trouble">
            <th>Nombre del Proceso</th>
            <th>Personas que Intervienen</th>
            <th>Tiempo Estimado</th>
            <th>Herramientas que Intervienen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {procesosAgregados.map((proceso, index) => (
            <tr key={index}>
              <td>{index === editingIndex ? (
                <input
                  className="nombres"
                  type="text"
                  name="nombreProceso"
                  value={this.state.nombreProceso}
                  onChange={this.handleChange}
                />
              ) : proceso.nombreProceso}</td>
              <td>{index === editingIndex ? (
                <input
                  className="nombre"
                  type="number"
                  name="personasIntervienen"
                  value={this.state.personasIntervienen}
                  onChange={this.handleChange}
                />
              ) : proceso.personasIntervienen}</td>
              <td>{index === editingIndex ? (
                <input
                  className="nombre"
                  type="number"
                  name="tiempoEstimado"
                  value={this.state.tiempoEstimado}
                  onChange={this.handleChange}
                />
              ) : proceso.tiempoEstimado}</td>
              <td>{index === editingIndex ? (
                <input
                  className="nombres"
                  type="text"
                  name="herramientasIntervienen"
                  value={this.state.herramientasIntervienen}
                  onChange={this.handleChange}
                />
              ) : (
                <div>
                  <ul>
                    {herramientasList.map((tool, toolIndex) => (
                      <li key={toolIndex}>{tool}</li>
                    ))}
                  </ul>
                </div>
              )}
              </td>
              <td>
                {index === editingIndex ? (
                  <button className="next-butt" onClick={this.handleSaveEdit}>Guardar</button>
                ) : (
                  <button className="next-butt" onClick={() => this.handleEdit(index)}>Editar</button>
                )}
              </td>
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
      return <Navigate to="/presupuesto" />;
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

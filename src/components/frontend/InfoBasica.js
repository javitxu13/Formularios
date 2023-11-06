import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import './css/Procesos.css'; // Import your custom CSS file

class InfoBasica extends Component {
  constructor(props) {
    super(props);
    this.state = {
      etapa: 1,
      nombre: '',
      empresa: '',
      cargo: '',
      correoElectronico: '',
      sector: '',
      numeroEmpleados: '',
      departamentos: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleNext = () => {
    this.setState((prevState) => ({
      etapa: prevState.etapa + 1,
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission specific to etapa 1 here.
  }

  renderEtapa1Form() {
    const { nombre, empresa, cargo, correoElectronico, sector, numeroEmpleados, departamentos } = this.state;

    return (
      
      <form className="form-container" onSubmit={this.handleNext}>
        <h2 className="form-title">Formulario de Información Básica</h2>

        <div className="form-field">
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={this.handleChange}
            placeholder="Nombre"
          />
        </div>

        <div className="form-field">
          <input
            type="text"
            name="empresa"
            value={empresa}
            onChange={this.handleChange}
            placeholder="Empresa"
          />
        </div>

        <div className="form-field">
          <input
            type="text"
            name="cargo"
            value={cargo}
            onChange={this.handleChange}
            placeholder="Cargo"
          />
        </div>

        <div className="form-field">
          <input
            className="date-input"
            type="email"
            name="correoElectronico"
            value={correoElectronico}
            onChange={this.handleChange}
            placeholder="Correo Electrónico"
          />
        </div>

        <div className="form-field">
          <input
            type="text"
            name="sector"
            value={sector}
            onChange={this.handleChange}
            placeholder="Sector"
          />
        </div>

        <div className="form-field">
          <input
            type="text"
            name="numeroEmpleados"
            value={numeroEmpleados}
            onChange={this.handleChange}
            placeholder="Número de Empleados"
          />
        </div>

        <div className="form-field">
          <label htmlFor="departamentos">Departamentos:</label>
          <select
            name="departamentos"
            value={departamentos}
            onChange={this.handleChange}
          >
            <option value="">Selecciona un departamento</option>
            <option value="Finanzas">Finanzas</option>
            <option value="Marketing">Marketing</option>
            <option value="Recursos Humanos">Recursos Humanos</option>
            <option value="Ventas">Ventas</option>
            <option value="Tecnología de la Información">Tecnología de la Información</option>
            <option value="Operaciones">Operaciones</option>
            <option value="Desarrollo de Productos">Desarrollo de Productos</option>
            <option value="Servicio al Cliente">Servicio al Cliente</option>
          </select>
        </div>

        <button className="next-button" type="submit">Siguiente</button>
      </form>
    );
  }

  render() {
    const { etapa } = this.state;

    if (etapa === 2) {
      return <Navigate to="/herramientas-software" />;
    }

    return (
      <div>
        {etapa === 1 && this.renderEtapa1Form()}
      </div>
    );
  }
}

export default InfoBasica;

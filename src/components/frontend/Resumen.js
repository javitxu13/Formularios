import React, { useContext } from 'react';
import Slider from 'react-slick';
import { FormDataContext } from './FormDataContext';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Resumen = () => {
  const { formData } = useContext(FormDataContext);
  const { tiempo } = formData; // Asumiendo que 'tiempo' es la clave que utilizaste para almacenar los datos del formulario Tiempo
  const { procesosAgregados } = formData.processAutomation;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const renderOtrasHerramientasSeleccionadas = () => {
    const herramientasSeleccionadas = formData.herramientasSoftware.otrasHerramientas;
    return Object.keys(herramientasSeleccionadas)
      .filter(herramienta => herramientasSeleccionadas[herramienta])
      .map(herramienta => <p key={herramienta}>{herramienta}</p>);
  };

  const renderProcessAutomation = () => {
    return formData.processAutomation.procesosAgregados.map((proceso, index) => (
      <div key={index}>
        <h3>Proceso {index + 1}</h3>
        <p>Nombre del Proceso: {proceso.nombreProceso}</p>
        <p>Personas que Intervienen: {proceso.personasIntervienen}</p>
        <p>Tiempo Estimado: {proceso.tiempoEstimado}</p>
        <p>Herramientas que Intervienen: {proceso.herramientasIntervienen}</p>
      </div>
    ));
  };

  return (
    <div>
      <h2>Resumen de Información</h2>
      <Slider {...settings}>
        {/* Info Básica Section */}
        <div>
          <h3>Info Básica</h3>
          <p>Nombre: {formData.infoBasica.nombre}</p>
          <p>Correo Electrónico: {formData.infoBasica.correoElectronico}</p>
          <p>Empresa: {formData.infoBasica.empresa}</p>
          <p>Cargo: {formData.infoBasica.cargo}</p>
          <p>Sector: {formData.infoBasica.sector}</p>
          <p>Número de Empleados: {formData.infoBasica.numeroEmpleados}</p>
          <p>Departamentos: {formData.infoBasica.departamentos?.join(', ')}</p>
        </div>
        {/* Herramientas de Software Section */}
        <div>
          <h3>Herramientas de Software</h3>
          <p>¿Trabaja con ERP?: {formData.herramientasSoftware.trabajaConERP}</p>
          <p>ERP Seleccionado: {formData.herramientasSoftware.erpSeleccionado}</p>
          <p>¿Trabaja con CRM?: {formData.herramientasSoftware.trabajaConCRM}</p>
          <p>CRM Seleccionado: {formData.herramientasSoftware.crmSeleccionado}</p>
          <p>¿Trabaja con Suite de Productividad?: {formData.herramientasSoftware.trabajaConSuite}</p>
          <p>Suite de Productividad: {formData.herramientasSoftware.suiteSeleccionada}</p>
          {formData.herramientasSoftware.suiteSeleccionada === 'Otro' && (
            <p>Suite Específica: {formData.herramientasSoftware.suiteEspecifica}</p>
          )}
          <div>
            <h4>Otras Herramientas Seleccionadas</h4>
            {renderOtrasHerramientasSeleccionadas()}
          </div>
        </div>
        {/* Process Automation Section */}
        <div>
          <h3>Automatización de Procesos</h3>
          <p>¿Nombre del proceso: {formData.Procesos}</p>
          <p>Cantidad de personas que intervienen: {formData.Procesos}</p>
          <p>Tiempo estimado: {formData.Procesos}</p>
          <p>Herramientas que intervienen: {formData.Procesos}</p>
        </div>
        <div>
      <h2>Resumen del Proyecto</h2>
      {tiempo && (
        <>
          <p>Fecha de Inicio: {tiempo.fechaInicio}</p>
          <p>Fecha de Finalización: {tiempo.fechaFinalizacion}</p>
          <p>Moneda del Proyecto: {tiempo.moneda}</p>
          <p>Presupuesto Estimado: {tiempo.presupuestoRango}</p>
        </>
      )}
    </div>
      </Slider>
    </div>
  );
}

export default Resumen;

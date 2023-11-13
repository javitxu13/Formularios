import React, { useContext } from 'react';
import Slider from 'react-slick';
import { FormDataContext } from './FormDataContext';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Resumen = () => {
  const { formData } = useContext(FormDataContext);

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

  return (
    <div>
      <h2>Resumen de Información</h2>
      <Slider {...settings}>
        <div>
          <h3>Info Básica</h3>
          {/* Asegúrate de que estos nombres de campos coincidan con los que usas en el formulario */}
          <p>Nombre: {formData.infoBasica.nombre}</p>
          <p>Correo Electrónico: {formData.infoBasica.correoElectronico}</p>
          <p>Empresa: {formData.infoBasica.empresa}</p>
          <p>Cargo: {formData.infoBasica.cargo}</p>
          <p>Sector: {formData.infoBasica.sector}</p>
          <p>Número de Empleados: {formData.infoBasica.numeroEmpleados}</p>
          <p>Departamentos: {formData.infoBasica.departamentos?.join(', ')}</p>
        </div>
        <div>
          <h3>Herramientas de Software</h3>
          {/* Asegúrate de que estos nombres de campos coincidan con los que usas en el formulario */}
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
      </Slider>
    </div>
  );
}

export default Resumen;

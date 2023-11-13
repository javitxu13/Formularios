import React, { useContext, useState } from 'react';
import { FormDataContext } from './FormDataContext';
import { FaEdit } from 'react-icons/fa';

const Resumen = () => {
  const { formData, updateFormData } = useContext(FormDataContext);

  const [editMode, setEditMode] = useState(false);
  const [nombre, setNombre] = useState(formData.nombre);
  const [correoElectronico, setCorreoElectronico] = useState(formData.correoElectronico);
  const [empresa, setEmpresa] = useState(formData.empresa);
  const [cargo, setCargo] = useState(formData.cargo);
  const [sector, setSector] = useState(formData.sector);
  const [numeroEmpleados, setNumeroEmpleados] = useState(formData.numeroEmpleados);
  const [departamentos, setDepartamentos] = useState(formData.departamentos || []);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    updateFormData({
      nombre,
      correoElectronico,
      empresa,
      cargo,
      sector,
      numeroEmpleados,
      departamentos
    });
    setEditMode(false);
  };

  const handleDepartmentChange = (e, index) => {
    const newDepartments = [...departamentos];
    newDepartments[index] = e.target.value;
    setDepartamentos(newDepartments);
  };

  const addDepartment = () => {
    setDepartamentos([...departamentos, '']);
  };

  const removeDepartment = (index) => {
    setDepartamentos(departamentos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>
        Resumen de Información 
        <FaEdit onClick={toggleEditMode} style={{ cursor: 'pointer', marginLeft: '10px' }} />
      </h2>
      {editMode ? (
        <>
          <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" />
          <input type="email" value={correoElectronico} onChange={e => setCorreoElectronico(e.target.value)} placeholder="Correo Electrónico" />
          <input type="text" value={empresa} onChange={e => setEmpresa(e.target.value)} placeholder="Empresa" />
          <input type="text" value={cargo} onChange={e => setCargo(e.target.value)} placeholder="Cargo" />
          <input type="text" value={sector} onChange={e => setSector(e.target.value)} placeholder="Sector" />
          <input type="number" value={numeroEmpleados} onChange={e => setNumeroEmpleados(e.target.value)} placeholder="Número de Empleados" />
          <div>
            <p>Departamentos:</p>
            {departamentos.map((dept, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={dept}
                  onChange={(e) => handleDepartmentChange(e, index)}
                />
                <button onClick={() => removeDepartment(index)}>Eliminar</button>
              </div>
            ))}
            <button onClick={addDepartment}>Agregar Departamento</button>
          </div>
          <button onClick={handleSave}>Guardar Cambios</button>
        </>
      ) : (
        <>
          <p>Nombre: {formData.nombre}</p>
          <p>Correo Electrónico: {formData.correoElectronico}</p>
          <p>Empresa: {formData.empresa}</p>
          <p>Cargo: {formData.cargo}</p>
          <p>Sector: {formData.sector}</p>
          <p>Número de Empleados: {formData.numeroEmpleados}</p>
          <p>Departamentos: {departamentos.join(', ')}</p>
        </>
      )}
    </div>
  );
}

export default Resumen;

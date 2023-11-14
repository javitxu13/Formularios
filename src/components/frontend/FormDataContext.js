import React, { createContext, useState } from 'react';

// Initialize the context with a default value
const defaultFormData = {
  infoBasica: {},
  herramientasSoftware: {},
  processAutomation: {
    procesosAgregados: []
  }
};

export const FormDataContext = createContext({
  formData: defaultFormData,
  updateFormData: () => {}
});

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState(defaultFormData);

  const updateFormData = (formName, newData) => {
    setFormData(prevData => ({
      ...prevData,
      [formName]: {
        ...prevData[formName],
        ...newData
      }
    }));
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

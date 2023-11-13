import React, { createContext, useState } from 'react';

export const FormDataContext = createContext({
  formData: {
    infoBasica: {},
    herramientasSoftware: {}
  },
  updateFormData: () => {}
});

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    infoBasica: {},
    herramientasSoftware: {}
  });

  const updateFormData = (formName, newData) => {
    setFormData(prevData => ({
      ...prevData,
      [formName]: { ...prevData[formName], ...newData }
    }));
  };
  

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

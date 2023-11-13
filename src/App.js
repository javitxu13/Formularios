import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Procesos from '../src/components/frontend/Procesos';
import InfoBasica from './components/frontend/InfoBasica';
import HerramientasSoftware from '../src/components/frontend/HerramientasSoftware';
import Tiempo from '../src/components/frontend/Tiempo';
import { FormDataProvider } from './components/frontend/FormDataContext';
import Resumen from './components/frontend/Resumen'; // Asegúrate de que el nombre del archivo y la importación coincidan

function App() {
  return (
    <Router>
      <FormDataProvider> {/* Mueve FormDataProvider aquí para envolver Routes */}
        <Routes> 
          <Route path="/" element={<InfoBasica />} />
          <Route path="/herramientas-software" element={<HerramientasSoftware />} />
          <Route path="/procesos" element={<Procesos />} />
          <Route path="/presupuesto" element={<Tiempo />} />
          <Route path="/resumen" element={<Resumen />} />
        </Routes>
      </FormDataProvider>
    </Router>
  );
}

export default App;

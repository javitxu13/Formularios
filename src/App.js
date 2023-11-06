import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa "Routes" en lugar de "Route"
import Procesos from '../src/components/frontend/Procesos';
import InfoBasica from './components/frontend/InfoBasica';
import HerramientasSoftware from '../src/components/frontend/HerramientasSoftware';
import Tiempo from '../src/components/frontend/Tiempo';


function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<InfoBasica />} /> {/* Usa "element" en lugar de "component" */}
        <Route path="/herramientas-software" element={<HerramientasSoftware />} />
        <Route path="/procesos" element={<Procesos />} />
        <Route path="/presupuesto" element={<Tiempo />} />
      </Routes>
    </Router>
  );
}

export default App;

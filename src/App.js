import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Encabezado';
import Sidebar from './components/BarraLateral';
import Empleados from './pages/Empleados';
import RolPago from './pages/RolPago';
import Licencias from './pages/Licencias';
import EvaluacionDesempeno from './pages/EvaluacionDesempeno'; 
import FormacionAcademica from './pages/FormacionAcademica'; 
import Curriculum from './pages/Curriculum';
import Contratos from './pages/Contratos';
import Sanciones from './pages/Sanciones';
import Ubicaciones from './pages/Ubicaciones';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Empleados />} />
              <Route path="/rol-pago" element={<RolPago />} />
              <Route path="/licencias" element={<Licencias />} />
              <Route path="/evaluacion-desempeno" element={<EvaluacionDesempeno />} />
              <Route path="/formacion-academica" element={<FormacionAcademica />} />
              <Route path="/curriculum" element={<Curriculum />} />
              <Route path="/contratos" element={<Contratos />} />
              <Route path="/sanciones" element={<Sanciones />} />
              <Route path="/ubicaciones" element={<Ubicaciones />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

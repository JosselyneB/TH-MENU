import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside>
    <nav>
      <ul>
        <li><Link to="/empleados">Empleados</Link></li>
        <li><Link to="/rol-pago">Rol de Pago</Link></li>
        <li><Link to="/licencias">Licencias</Link></li>
        <li><Link to="/evaluacion">Evaluación de Desempeño</Link></li>
        <li><Link to="/formacion">Formación Académica</Link></li>
        <li><Link to="/historial">Historial Laboral</Link></li>
        <li><Link to="/contratos">Contratos</Link></li>
        <li><Link to="/sanciones">Sanciones</Link></li>
        <li><Link to="/ubicaciones">Ubicaciones</Link></li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;

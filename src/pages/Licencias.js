import React, { useState } from 'react';

const Licencias = () => {
  const [licencias] = useState([
    { id: 1, name: 'Juan Pérez', type: 'Vacaciones', startDate: '2024-01-10', endDate: '2024-01-15' },
    { id: 2, name: 'Ana Gómez', type: 'Permiso médico', startDate: '2024-01-05', endDate: '2024-01-07' },
  ]);

  return (
    <div>
      <h2>Gestión de Licencias</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Inicio</th>
            <th>Fin</th>
          </tr>
        </thead>
        <tbody>
          {licencias.map((licencia) => (
            <tr key={licencia.id}>
              <td>{licencia.name}</td>
              <td>{licencia.type}</td>
              <td>{licencia.startDate}</td>
              <td>{licencia.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Licencias;

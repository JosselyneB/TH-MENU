import React, { useState } from 'react';

const Contratos = () => {
  const [contratos] = useState([
    { id: 1, name: 'Juan Pérez', type: 'Indefinido', startDate: '2020-01-01', endDate: 'N/A' },
    { id: 2, name: 'Ana Gómez', type: 'Temporal', startDate: '2023-01-15', endDate: '2024-01-14' },
  ]);

  return (
    <div>
      <h2>Gestión de Contratos</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo de Contrato</th>
            <th>Fecha de Inicio</th>
            <th>Fecha de Fin</th>
          </tr>
        </thead>
        <tbody>
          {contratos.map((contrato) => (
            <tr key={contrato.id}>
              <td>{contrato.name}</td>
              <td>{contrato.type}</td>
              <td>{contrato.startDate}</td>
              <td>{contrato.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contratos;

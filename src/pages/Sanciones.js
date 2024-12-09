import React, { useState } from 'react';

const Sanciones = () => {
  const [sanciones] = useState([
    { id: 1, name: 'Juan Pérez', reason: 'Llegadas tardías', date: '2023-11-01', severity: 'Moderada' },
    { id: 2, name: 'Ana Gómez', reason: 'Incumplimiento de tareas', date: '2023-12-01', severity: 'Alta' },
  ]);

  return (
    <div>
      <h2>Gestión de Sanciones</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Razón</th>
            <th>Fecha</th>
            <th>Severidad</th>
          </tr>
        </thead>
        <tbody>
          {sanciones.map((sancion) => (
            <tr key={sancion.id}>
              <td>{sancion.name}</td>
              <td>{sancion.reason}</td>
              <td>{sancion.date}</td>
              <td>{sancion.severity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sanciones;

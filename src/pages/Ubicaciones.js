import React, { useState } from 'react';

const Ubicaciones = () => {
  const [ubicaciones] = useState([
    { id: 1, name: 'Juan Pérez', location: 'Oficina Central', city: 'Quito' },
    { id: 2, name: 'Ana Gómez', location: 'Sucursal Norte', city: 'Guayaquil' },
  ]);

  return (
    <div>
      <h2>Gestión de Ubicaciones</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Ubicación</th>
            <th>Ciudad</th>
          </tr>
        </thead>
        <tbody>
          {ubicaciones.map((ubicacion) => (
            <tr key={ubicacion.id}>
              <td>{ubicacion.name}</td>
              <td>{ubicacion.location}</td>
              <td>{ubicacion.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ubicaciones;

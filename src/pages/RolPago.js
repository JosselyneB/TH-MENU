import React, { useState } from 'react';

const RolPago = () => {
  const [pagos] = useState([
    { id: 1, name: 'Juan Pérez', salary: 1200, month: 'Noviembre' },
    { id: 2, name: 'Ana Gómez', salary: 1400, month: 'Noviembre' },
  ]);

  return (
    <div>
      <h2>Gestión de Rol de Pago</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Salario</th>
            <th>Mes</th>
          </tr>
        </thead>
        <tbody>
          {pagos.map((pago) => (
            <tr key={pago.id}>
              <td>{pago.name}</td>
              <td>${pago.salary}</td>
              <td>{pago.month}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RolPago;

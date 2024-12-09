import React, { useState } from 'react';

const FormacionAcademica = () => {
  const [formaciones] = useState([
    { id: 1, name: 'Juan Pérez', degree: 'Ingeniería en Sistemas', institution: 'Universidad X', year: 2020 },
    { id: 2, name: 'Ana Gómez', degree: 'Diseño Gráfico', institution: 'Instituto Y', year: 2019 },
  ]);

  return (
    <div>
      <h2>Formación Académica</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Título</th>
            <th>Institución</th>
            <th>Año</th>
          </tr>
        </thead>
        <tbody>
          {formaciones.map((formacion) => (
            <tr key={formacion.id}>
              <td>{formacion.name}</td>
              <td>{formacion.degree}</td>
              <td>{formacion.institution}</td>
              <td>{formacion.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormacionAcademica;

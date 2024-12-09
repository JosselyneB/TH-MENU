import React, { useState } from 'react';

const Empleados = () => {
  const [empleados, setEmpleados] = useState([
    { id: 1, name: 'Juan Pérez', position: 'Desarrollador' },
    { id: 2, name: 'Ana Gómez', position: 'Diseñadora' },
  ]);
  const [newEmployee, setNewEmployee] = useState({ name: '', position: '' });

  const handleAddEmployee = () => {
    if (newEmployee.name && newEmployee.position) {
      setEmpleados([
        ...empleados,
        { id: empleados.length + 1, name: newEmployee.name, position: newEmployee.position },
      ]);
      setNewEmployee({ name: '', position: '' });
    }
  };

  return (
    <div>
      <h2>Gestión de Empleados</h2>
      <ul>
        {empleados.map((empleado) => (
          <li key={empleado.id}>
            {empleado.name} - {empleado.position}
          </li>
        ))}
      </ul>
      <h3>Agregar Nuevo Empleado</h3>
      <input
        type="text"
        placeholder="Nombre"
        value={newEmployee.name}
        onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Puesto"
        value={newEmployee.position}
        onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })}
      />
      <button onClick={handleAddEmployee}>Agregar</button>
    </div>
  );
};

export default Empleados;

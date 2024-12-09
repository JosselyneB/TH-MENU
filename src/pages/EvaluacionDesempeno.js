import React, { useState } from 'react';

const EvaluacionDesempeno = () => {
  const [evaluaciones, setEvaluaciones] = useState([
    { id: 1, name: 'Juan Pérez', score: 90, feedback: 'Excelente desempeño' },
    { id: 2, name: 'Ana Gómez', score: 85, feedback: 'Buen trabajo, mejorar en atención al detalle' },
  ]);

  const [newEvaluation, setNewEvaluation] = useState({ name: '', score: '', feedback: '' });

  const handleAddEvaluation = () => {
    if (newEvaluation.name && newEvaluation.score && newEvaluation.feedback) {
      setEvaluaciones([
        ...evaluaciones,
        { id: evaluaciones.length + 1, ...newEvaluation },
      ]);
      setNewEvaluation({ name: '', score: '', feedback: '' });
    }
  };

  return (
    <div>
      <h2>Evaluación de Desempeño</h2>
      <ul>
        {evaluaciones.map((evaluacion) => (
          <li key={evaluacion.id}>
            {evaluacion.name} - Puntuación: {evaluacion.score} - Comentarios: {evaluacion.feedback}
          </li>
        ))}
      </ul>
      <h3>Agregar Nueva Evaluación</h3>
      <input
        type="text"
        placeholder="Nombre"
        value={newEvaluation.name}
        onChange={(e) => setNewEvaluation({ ...newEvaluation, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Puntuación"
        value={newEvaluation.score}
        onChange={(e) => setNewEvaluation({ ...newEvaluation, score: e.target.value })}
      />
      <textarea
        placeholder="Comentarios"
        value={newEvaluation.feedback}
        onChange={(e) => setNewEvaluation({ ...newEvaluation, feedback: e.target.value })}
      />
      <button onClick={handleAddEvaluation}>Agregar</button>
    </div>
  );
};

export default EvaluacionDesempeno;

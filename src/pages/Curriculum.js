import React, { useState } from 'react';

const Curriculum = () => {
  const [cvList] = useState([
    {
      id: 1,
      name: 'Juan Pérez',
      education: 'Ingeniería en Sistemas - Universidad X (2020)',
      experience: [
        { position: 'Asistente', company: 'Empresa A', years: '2018-2020' },
        { position: 'Desarrollador', company: 'Empresa B', years: '2020-2023' },
      ],
      skills: ['JavaScript', 'React', 'Node.js'],
    },
    {
      id: 2,
      name: 'Ana Gómez',
      education: 'Diseño Gráfico - Instituto Y (2019)',
      experience: [
        { position: 'Diseñadora Junior', company: 'Agencia B', years: '2017-2019' },
        { position: 'Diseñadora Senior', company: 'Estudio C', years: '2019-2023' },
      ],
      skills: ['Photoshop', 'Illustrator', 'Figma'],
    },
  ]);

  return (
    <div>
      <h2>Curriculum (Hoja de Vida)</h2>
      {cvList.map((cv) => (
        <div key={cv.id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
          <h3>{cv.name}</h3>
          <p><strong>Educación:</strong> {cv.education}</p>
          <p><strong>Experiencia Laboral:</strong></p>
          <ul>
            {cv.experience.map((exp, index) => (
              <li key={index}>
                {exp.position} en {exp.company} ({exp.years})
              </li>
            ))}
          </ul>
          <p><strong>Habilidades:</strong></p>
          <ul>
            {cv.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Curriculum;

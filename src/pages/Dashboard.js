import React from 'react';
import './Dashboard.css'; // Archivo CSS para estilos
//import logoULEAM from './assets/LOGO_ULEAM_2.png'; // Asegúrate de colocar la imagen en la carpeta correcta

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Encabezado */}
      <header className="header">
        <button className="nav-toggle">
          <i className="fa-solid fa-bars"></i>
        </button>
        <nav className="nav">
          <a href="/" className="logo">
            <img className="logou" src={logoULEAM} alt="Logo ULEAM" />
          </a>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <a href="/mi-perfil" className="nav-menu-link">
                <i className="fa-solid fa-user"></i> Mi perfil
              </a>
            </li>
            <li className="nav-menu-item">
              <a href="/cambiar-contrasena" className="nav-menu-link">
                <i className="fa-solid fa-key"></i> Cambiar contraseña
              </a>
            </li>
            <li className="nav-menu-item">
              <a href="/notificaciones" className="nav-menu-link">
                <i className="fa-solid fa-bell"></i> Notificaciones
              </a>
            </li>
            <li className="nav-menu-item">
              <a href="/registros" className="nav-menu-link">
                <i className="fa-solid fa-database"></i> Registros
              </a>
            </li>
            <li className="nav-menu-item">
              <a href="/logout" className="nav-menu-link">
                <i className="fa-solid fa-right-from-bracket"></i> Cerrar sesión
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Contenido principal */}
      <main className="content">
        <div className="banerp">
          <h3 className="texto3p">
            Bienvenido(a) <span>JOSSELYNE BASURTO CASQUETE</span>
          </h3>
          <p className="parrafo">
            Tipo de Alumno: <b>Regular</b>
            <br />
            Número de matrícula: <b>2023P2-24481</b>
            <br />
            Servicios de control y seguimiento de proyectos de investigación
          </p>
        </div>

        <div className="buttons">
          <div className="button1">
            <a href="/control-seguimiento" className="button">
              <b>CONTROL Y SEGUIMIENTO</b>
            </a>
          </div>
          <div className="button1">
            <a href="/proyectos-investigacion" className="button">
              <b>PROYECTO DE INVESTIGACIÓN</b>
            </a>
          </div>
        </div>
      </main>

      {/* Pie de página */}
      <footer className="footer">
        <strong>MANTA - MANABÍ - ECUADOR</strong> &copy; 2023
      </footer>
    </div>
  );
};

export default Dashboard;

import { useState } from "react";
import VisorDocumento from "./VisorDocumento.jsx";
import TemporizadorPomodoro from "./TemporizadorPomodoro.jsx";
import ConfiguracionUsuario from "./ConfiguracionUsuario.jsx";

function AppLab4() {
  const [mostrarVisor, setMostrarVisor] = useState(true);

  return (
    <div className="lab4-container">
      <style>
        {`
        :root {
          --celeste: #4da6ff;
          --rosita: #ff6b81;
          --fondo-claro: #f7f9fc;
          --texto-claro: #1a1a1a;
          --tarjeta-clara: #ffffff;
          --borde-claro: #e3e6ea;
          --fondo-oscuro: #1e1e1e;
          --texto-oscuro: #f2f2f2;
          --tarjeta-oscura: #2a2a2a;
          --titulo: #ff6b81;
        }

        body.tema-claro {
          background: var(--fondo-claro);
          color: var(--texto-claro);
        }

        body.tema-oscuro {
          background: var(--fondo-oscuro);
          color: var(--texto-oscuro);
        }

        .lab4-container {
          max-width: 900px;
          margin: auto;
          padding: 20px;
          font-family: "Poppins", sans-serif;
        }

        h1 {
          font-size: 30px;
          font-weight: 700;
          color: var(--titulo);
          text-align: center;
          margin-bottom: 25px;
        }

        .lab4-card {
          background: var(--tarjeta-clara);
          padding: 20px;
          border-radius: 14px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          border: 1px solid var(--borde-claro);
          margin-bottom: 20px;
        }

        body.tema-oscuro .lab4-card {
          background: var(--tarjeta-oscura);
          border-color: #555;
          color: var(--texto-oscuro);
        }

        .lab4-title {
          font-size: 22px;
          font-weight: 600;
          color: var(--rosita);
          margin-bottom: 10px;
        }

        .lab4-btn,
        .lab4-btn-sec {
          padding: 14px 22px;
          font-size: 17px;
          border-radius: 14px;
          cursor: pointer;
          margin-right: 12px;
          transition: 0.2s;
          font-weight: 600;
          border: 2px solid transparent;
          box-shadow: 0 3px 8px rgba(0,0,0,0.15);
        }

        .lab4-btn {
          background: var(--rosita);
          color: white;
        }

        .lab4-btn:hover {
          background: #ff8fa1;
        }

        .lab4-btn-sec {
          background: var(--celeste);
          color: white;
        }

        .lab4-btn-sec:hover {
          background: #6bb8ff;
        }

        body.tema-oscuro .lab4-btn,
        body.tema-oscuro .lab4-btn-sec {
          border: 2px solid #999;
          box-shadow: 0 3px 8px rgba(255,255,255,0.15);
        }

        .lab4-input,
        .lab4-select {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          border: 1px solid var(--borde-claro);
          margin-bottom: 12px;
          font-size: 16px;
          background: var(--tarjeta-clara);
          color: var(--texto-claro);
        }

        body.tema-oscuro .lab4-input,
        body.tema-oscuro .lab4-select {
          background: #2f2f2f;
          color: var(--texto-oscuro);
          border-color: #777;
        }

        .lab4-check {
          margin-right: 8px;
        }

        /* VISTA PREVIA BONITA Y COLOREADA */
        .lab4-preview {
          background: var(--tarjeta-clara);
          padding: 22px;
          border-radius: 16px;
          border: 1px solid var(--borde-claro);
          font-family: "Poppins", sans-serif;
          font-size: 18px;
          line-height: 1.8;
          white-space: pre-wrap;
          word-break: break-word;
        }

        body.tema-oscuro .lab4-preview {
          background: #2f2f2f;
          border-color: #777;
          color: var(--texto-oscuro);
        }

        .json-brace {
          color: var(--rosita);
          font-weight: 700;
        }

        .json-key {
          color: var(--celeste);
          font-weight: 600;
        }

        .json-string {
          color: #ffb3c6;
        }

        .json-boolean {
          color: #9be7ff;
          font-weight: 600;
        }
        `}
      </style>

      <h1>Laboratorio 4</h1>

      <div className="lab4-card">
        <h2 className="lab4-title">Ejercicio 1</h2>
        {mostrarVisor ? (
          <VisorDocumento onDesmontar={() => setMostrarVisor(false)} />
        ) : (
          <button className="lab4-btn-sec" onClick={() => setMostrarVisor(true)}>
            Mostrar componente
          </button>
        )}
      </div>

      <div className="lab4-card">
        <h2 className="lab4-title">Ejercicio 2</h2>
        <TemporizadorPomodoro />
      </div>

      <div className="lab4-card">
        <h2 className="lab4-title">Ejercicio 3</h2>
        <ConfiguracionUsuario />
      </div>
    </div>
  );
}

export default AppLab4;

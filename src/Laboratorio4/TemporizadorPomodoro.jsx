import { useEffect, useState } from "react";

function TemporizadorPomodoro() {
  const [tiempo, setTiempo] = useState(1500);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    let intervalo;

    if (activo && tiempo > 0) {
      intervalo = setInterval(() => {
        setTiempo((t) => t - 1);
      }, 1000);
    }

    if (tiempo === 0) {
      alert("Tiempo finalizado");
      setActivo(false);
    }

    return () => clearInterval(intervalo);
  }, [activo, tiempo]);

  const formato = () => {
    const min = Math.floor(tiempo / 60);
    const seg = tiempo % 60;
    return `${min}:${seg.toString().padStart(2, "0")}`;
  };

  const reiniciar = () => {
    setTiempo(1500);
    setActivo(false);
  };

  return (
    <div>
      <h3>{formato()}</h3>

      <button className="lab4-btn" onClick={() => setActivo(true)}>
        Iniciar
      </button>

      <button className="lab4-btn-sec" onClick={() => setActivo(false)}>
        Pausar
      </button>

      <button className="lab4-btn-sec" onClick={reiniciar}>
        Reiniciar
      </button>
    </div>
  );
}

export default TemporizadorPomodoro;

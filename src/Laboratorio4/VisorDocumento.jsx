import { useEffect, useState } from "react";

function VisorDocumento({ onDesmontar }) {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${contador} - Mi App`;
    return () => {
      document.title = "Mi App";
    };
  }, [contador]);

  return (
    <div>
      <h3>Contador: {contador}</h3>

      <button className="lab4-btn" onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>

      <button className="lab4-btn-sec" onClick={() => setContador(contador - 1)}>
        Decrementar
      </button>

      <button className="lab4-btn-sec" onClick={onDesmontar}>
        Simular desmontaje
      </button>
    </div>
  );
}

export default VisorDocumento;

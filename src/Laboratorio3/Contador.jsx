import { useState } from "react";
import BotonAccion from "./BotonAccion.jsx";
import Alerta from "./Alerta.jsx";

function Contador() {
  const [valor, setValor] = useState(0);

  return (
    <div>
      <h3>Contador: {valor}</h3>

      {valor === 0 && (
        <Alerta tipo="info" titulo="Aviso">
          El contador está en cero
        </Alerta>
      )}

      {valor > 10 && (
        <Alerta tipo="advertencia" titulo="Cuidado">
          ¡Valor alto!
        </Alerta>
      )}

      <BotonAccion
        texto="Decrementar"
        variante="secundario"
        disabled={valor === 0}
        onClick={() => setValor((v) => v - 1)}
      />

      <BotonAccion
        texto="Incrementar"
        variante="primario"
        onClick={() => setValor((v) => v + 1)}
      />

      <BotonAccion
        texto="Incrementar +5"
        variante="primario"
        onClick={() => setValor((v) => v + 5)}
      />

      <BotonAccion
        texto="Reiniciar"
        variante="peligro"
        onClick={() => setValor(0)}
      />
    </div>
  );
}

export default Contador;

import Acordeon from "./Acordeon.jsx";
import Alerta from "./Alerta.jsx";
import BotonAccion from "./BotonAccion.jsx";
import Modal from "./Modal.jsx";
import Contador from "./Contador.jsx";
import ListaContactos from "./ListaContactos.jsx";
import FormularioEvento from "./FormularioEvento.jsx";

function AppLab3() {
  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Poppins, Arial, sans-serif",
        background: "rgba(170, 220, 170, 0.55)",
        borderRadius: "20px",
        backdropFilter: "blur(12px)",
        boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
        color: "#082312"
      }}
    >
      <Acordeon titulo="Ejercicio 1 - Alerta y Acordeón">
        <Alerta tipo="exito" titulo="Operación exitosa">
          Todo salió bien.
        </Alerta>

        <Alerta tipo="advertencia" titulo="Advertencia">
          Ten cuidado con esta acción.
        </Alerta>

        <Alerta tipo="error" titulo="Error">
          Algo salió mal.
        </Alerta>

        <Alerta tipo="info" titulo="Información">
          Este es un mensaje informativo.
        </Alerta>
      </Acordeon>

      <Acordeon titulo="Ejercicio 2 - Modal, Botón y Contador">
        <Contador />
      </Acordeon>

      <Acordeon titulo="Ejercicio 3 - Lista de Contactos">
        <ListaContactos />
      </Acordeon>

      <Acordeon titulo="Ejercicio 4 - Formulario de Evento">
        <FormularioEvento />
      </Acordeon>
    </div>
  );
}

export default AppLab3;

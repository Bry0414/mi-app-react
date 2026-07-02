import { useEffect, useState } from "react";

function ConfiguracionUsuario() {
  const leerInicial = () => {
    try {
      const guardado = localStorage.getItem("config-usuario");
      if (guardado) return JSON.parse(guardado);
    } catch (e) {
      console.error("Error leyendo localStorage:", e);
    }

    return {
      nombre: "",
      tema: "claro",
      notificaciones: true,
    };
  };

  const [config, setConfig] = useState(leerInicial);

  useEffect(() => {
    try {
      localStorage.setItem("config-usuario", JSON.stringify(config));
    } catch (e) {
      console.error("Error guardando:", e);
    }
  }, [config]);

  useEffect(() => {
    document.body.className = config.tema === "claro" ? "tema-claro" : "tema-oscuro";
  }, [config.tema]);

  const restablecer = () => {
    localStorage.removeItem("config-usuario");
    setConfig({
      nombre: "",
      tema: "claro",
      notificaciones: true,
    });
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <label>
        Nombre:
        <input
          className="lab4-input"
          type="text"
          value={config.nombre}
          onChange={(e) =>
            setConfig({ ...config, nombre: e.target.value })
          }
        />
      </label>

      <label>
        Tema:
        <select
          className="lab4-select"
          value={config.tema}
          onChange={(e) =>
            setConfig({ ...config, tema: e.target.value })
          }
        >
          <option value="claro">Claro</option>
          <option value="oscuro">Oscuro</option>
        </select>
      </label>

      <label>
        Notificaciones:
        <input
          className="lab4-check"
          type="checkbox"
          checked={config.notificaciones}
          onChange={(e) =>
            setConfig({ ...config, notificaciones: e.target.checked })
          }
        />
      </label>

      <button className="lab4-btn-sec" onClick={restablecer}>
        Restablecer valores
      </button>

      <h3>Vista previa:</h3>

      <pre className="lab4-preview">
        <span className="json-brace">{`{`}</span>
        {"\n  "}
        <span className="json-key">"nombre"</span>: <span className="json-string">"{config.nombre}"</span>,
        {"\n  "}
        <span className="json-key">"tema"</span>: <span className="json-string">"{config.tema}"</span>,
        {"\n  "}
        <span className="json-key">"notificaciones"</span>: <span className="json-boolean">{String(config.notificaciones)}</span>
        {"\n"}
        <span className="json-brace">{`}`}</span>
      </pre>
    </div>
  );
}

export default ConfiguracionUsuario;

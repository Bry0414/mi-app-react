import { useState } from "react";
import Alerta from "./Alerta.jsx";
import BotonAccion from "./BotonAccion.jsx";

function FormularioEvento() {
  const [form, setForm] = useState({
    titulo: "",
    fecha: "",
    dia: "",
    mes: "",
    año: "",
    categoria: "",
    descripcion: "",
    esPublico: false
  });

  const [errores, setErrores] = useState({});
  const [tocado, setTocado] = useState(false);
  const [confirmado, setConfirmado] = useState(false);
  const [eventos, setEventos] = useState([]);

  const dias = Array.from({ length: 31 }, (_, i) => i + 1);
  const meses = [
    "Enero","Febrero","Marzo","Abril","Mayo","Junio",
    "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
  ];
  const años = Array.from({ length: 50 }, (_, i) => 1980 + i);

  const [pickerTipo, setPickerTipo] = useState("");
  const [pickerAbierto, setPickerAbierto] = useState(false);

  function seleccionarValor(tipo, valor) {
    const nuevo = { ...form, [tipo]: valor };

    if (nuevo.dia && nuevo.mes && nuevo.año) {
      nuevo.fecha = `${nuevo.año}-${String(nuevo.mes).padStart(2, "0")}-${String(
        nuevo.dia
      ).padStart(2, "0")}`;
    }

    setForm(nuevo);
  }

  function validar() {
    const err = {};

    if (form.titulo.length < 5) err.titulo = "Mínimo 5 caracteres";
    if (!form.fecha) err.fecha = "Selecciona día, mes y año";
    if (form.categoria === "") err.categoria = "Selecciona una categoría";
    if (form.descripcion.length < 20)
      err.descripcion = "Mínimo 20 caracteres";

    return err;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTocado(true);

    const err = validar();
    setErrores(err);

    if (Object.keys(err).length > 0) return;

    setEventos((prev) => [...prev, form]);

    setForm({
      titulo: "",
      fecha: "",
      dia: "",
      mes: "",
      año: "",
      categoria: "",
      descripcion: "",
      esPublico: false
    });

    setConfirmado(true);
    setTimeout(() => setConfirmado(false), 4000);
  }

  const estiloInput = {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "2px solid #1b7f3a",
    outline: "none",
    marginBottom: "8px",
    fontFamily: "Poppins, sans-serif",
    background: "white",
    color: "#0f3d1e",
    fontSize: "15px"
  };

  const estiloPicker = {
    marginTop: "10px",
    background: "white",
    borderRadius: "12px",
    padding: "10px",
    border: "2px solid #1b7f3a",
    maxHeight: "150px",
    overflowY: "scroll",
    scrollSnapType: "y mandatory"
  };

  const estiloItem = {
    padding: "10px",
    textAlign: "center",
    fontSize: "18px",
    scrollSnapAlign: "center",
    cursor: "pointer",
    borderRadius: "8px",
    color: "#0f3d1e",
    background: "rgba(200,240,200,0.4)",
    marginBottom: "6px",
    border: "1px solid #1b7f3a"
  };

  return (
    <div
      style={{
        background: "rgba(200,240,200,0.35)",
        padding: "25px",
        borderRadius: "18px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.15)"
      }}
    >
      <h3 style={{ marginTop: 0, color: "#0f3d1e" }}>Registrar evento</h3>

      {confirmado && (
        <Alerta tipo="exito" titulo="Evento registrado">
          El evento se guardó correctamente
        </Alerta>
      )}

      <form onSubmit={handleSubmit}>
        <input
          name="titulo"
          placeholder="Título del evento"
          value={form.titulo}
          onChange={(e) => setForm({ ...form, titulo: e.target.value })}
          style={estiloInput}
        />
        {tocado && errores.titulo && (
          <Alerta tipo="error" titulo="Error">
            {errores.titulo}
          </Alerta>
        )}

        <strong style={{ color: "#0f3d1e" }}>Fecha del evento</strong>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "10px",
            marginBottom: "25px"
          }}
        >
          <BotonAccion
            texto={form.dia || "Día"}
            variante="secundario"
            onClick={() => {
              setPickerTipo("dia");
              setPickerAbierto(true);
            }}
          />

          <BotonAccion
            texto={form.mes ? meses[form.mes - 1] : "Mes"}
            variante="secundario"
            onClick={() => {
              setPickerTipo("mes");
              setPickerAbierto(true);
            }}
          />

          <BotonAccion
            texto={form.año || "Año"}
            variante="secundario"
            onClick={() => {
              setPickerTipo("año");
              setPickerAbierto(true);
            }}
          />
        </div>

        {tocado && errores.fecha && (
          <Alerta tipo="error" titulo="Error">
            {errores.fecha}
          </Alerta>
        )}

        {pickerAbierto && (
          <div style={estiloPicker}>
            {(pickerTipo === "dia" ? dias :
              pickerTipo === "mes" ? meses :
              años
            ).map((item, index) => (
              <div
                key={index}
                style={estiloItem}
                onClick={() => {
                  seleccionarValor(
                    pickerTipo,
                    pickerTipo === "mes" ? index + 1 : item
                  );
                  setPickerAbierto(false);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        )}

        <select
          name="categoria"
          value={form.categoria}
          onChange={(e) => setForm({ ...form, categoria: e.target.value })}
          style={estiloInput}
        >
          <option value="">Selecciona categoría</option>
          <option value="conferencia">Conferencia</option>
          <option value="taller">Taller</option>
          <option value="seminario">Seminario</option>
          <option value="otro">Otro</option>
        </select>
        {tocado && errores.categoria && (
          <Alerta tipo="error" titulo="Error">
            {errores.categoria}
          </Alerta>
        )}

        <textarea
          name="descripcion"
          placeholder="Descripción del evento"
          value={form.descripcion}
          onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
          style={{ ...estiloInput, height: "90px", resize: "none" }}
        />
        {tocado && errores.descripcion && (
          <Alerta tipo="error" titulo="Error">
            {errores.descripcion}
          </Alerta>
        )}

        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "15px",
            marginTop: "5px",
            color: "#0f3d1e"
          }}
        >
          <input
            type="checkbox"
            checked={form.esPublico}
            onChange={(e) =>
              setForm({ ...form, esPublico: e.target.checked })
            }
          />
          Evento público
        </label>

        <BotonAccion
          texto="Registrar evento"
          variante="primario"
          disabled={
            !form.titulo ||
            !form.fecha ||
            !form.categoria ||
            !form.descripcion
          }
        />
      </form>

      <h3 style={{ marginTop: "25px", color: "#0f3d1e" }}>
        Eventos registrados
      </h3>

      {eventos.map((e, i) => (
        <div
          key={i}
          style={{
            background: "rgba(200,240,200,0.7)",
            padding: "15px",
            borderRadius: "14px",
            marginBottom: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
        >
          <strong style={{ color: "#0f3d1e" }}>{e.titulo}</strong>
          <p style={{ margin: "4px 0" }}>
            📅 {e.fecha} — 🏷️ {e.categoria}
          </p>
          <p style={{ margin: 0 }}>
            {e.esPublico ? "🌍 Público" : "🔒 Privado"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FormularioEvento;

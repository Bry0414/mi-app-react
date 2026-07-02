import { useNotas } from "../context/NotasContext.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export default function EditarNota() {
  const { state, editarNota } = useNotas();
  const navigate = useNavigate();
  const { id } = useParams();

  const nota = state.notas.find((n) => String(n.id) === String(id));

  if (!nota) {
    return <p style={{ color: "#4c1d95" }}>Nota no encontrada.</p>;
  }

  const [titulo, setTitulo] = useState(nota.titulo);
  const [contenido, setContenido] = useState(nota.contenido);

  const handleSubmit = (e) => {
    e.preventDefault();
    editarNota(id, titulo, contenido);
    navigate(`/lab5/notas/${id}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#f5f3ff",
        padding: "24px",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ color: "#4c1d95", marginBottom: "20px" }}>Editar nota 💜</h2>

      <label style={{ color: "#4c1d95", fontWeight: "600" }}>Título</label>
      <input
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "6px",
          marginBottom: "16px",
          borderRadius: "10px",
          border: "2px solid #c4b5fd",
          background: "#ffffff",
          color: "#4c1d95",
        }}
      />

      <label style={{ color: "#4c1d95", fontWeight: "600" }}>Contenido</label>
      <textarea
        value={contenido}
        onChange={(e) => setContenido(e.target.value)}
        rows="5"
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "6px",
          marginBottom: "16px",
          borderRadius: "10px",
          border: "2px solid #c4b5fd",
          background: "#ffffff",
          color: "#4c1d95",
        }}
      />

      <button
        type="submit"
        style={{
          background: "#7c3aed",
          color: "#fff",
          padding: "12px 20px",
          borderRadius: "12px",
          border: "none",
          fontWeight: "600",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        }}
      >
        Guardar cambios
      </button>
    </form>
  );
}

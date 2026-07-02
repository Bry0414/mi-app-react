import { useNotas } from "../context/NotasContext.jsx";
import { Link, useParams } from "react-router-dom";

export default function DetalleNota() {
  const { state } = useNotas();
  const { id } = useParams();

  const nota = state.notas.find((n) => String(n.id) === String(id));

  if (!nota) {
    return <p style={{ color: "#4c1d95" }}>Nota no encontrada.</p>;
  }

  return (
    <div
      style={{
        background: "#ede9fe",
        padding: "24px",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ color: "#4c1d95" }}>{nota.titulo}</h2>
      <p style={{ color: "#4c1d95", marginBottom: "20px" }}>{nota.contenido}</p>

      <Link
        to={`/lab5/notas/${id}/editar`}
        style={{
          background: "#7c3aed",
          color: "#fff",
          padding: "10px 16px",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "600",
          boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
        }}
      >
        Editar nota
      </Link>
    </div>
  );
}

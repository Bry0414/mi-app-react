import { useNotas } from "../context/NotasContext.jsx";
import { Link } from "react-router-dom";

export default function Notas() {
  const { state } = useNotas();

  let notasFiltradas = state.notas;

  if (state.filtroCategoria !== "todas") {
    notasFiltradas = notasFiltradas.filter(
      (n) => String(n.categoria) === String(state.filtroCategoria)
    );
  }

  if (state.busqueda.trim() !== "") {
    notasFiltradas = notasFiltradas.filter((n) =>
      n.titulo.toLowerCase().includes(state.busqueda.toLowerCase())
    );
  }

  return (
    <div>
      <h2 style={{ color: "#4c1d95", marginBottom: "20px" }}>Tus notas 💜</h2>

      {notasFiltradas.length === 0 ? (
        <p style={{ color: "#4c1d95" }}>No tienes notas aún.</p>
      ) : (
        <div style={{ display: "grid", gap: "16px" }}>
          {notasFiltradas.map((nota) => (
            <div
              key={nota.id}
              style={{
                background: "#ede9fe",
                padding: "20px",
                borderRadius: "14px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ color: "#4c1d95" }}>{nota.titulo}</h3>
              <p style={{ color: "#4c1d95" }}>{nota.contenido}</p>

              <Link
                to={`/lab5/notas/${nota.id}`}
                style={{
                  marginTop: "10px",
                  display: "inline-block",
                  background: "#7c3aed",
                  color: "#fff",
                  padding: "10px 16px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: "600",
                  boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
                }}
              >
                Ver detalle
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

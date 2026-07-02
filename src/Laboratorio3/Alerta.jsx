function Alerta({ tipo = "info", titulo, children }) {
  const estilos = {
    exito: { fondo: "#d1f7d8", color: "#0f3d1e", icono: "✅" },
    advertencia: { fondo: "#fff4c2", color: "#7a5a00", icono: "⚠️" },
    error: { fondo: "#ffd6d6", color: "#8b1a1a", icono: "❌" },
    info: { fondo: "#d9f0ff", color: "#0a3a5f", icono: "ℹ️" }
  };

  const estilo = estilos[tipo];

  return (
    <div
      style={{
        background: estilo.fondo,
        color: estilo.color,
        padding: "15px",
        borderRadius: "12px",
        marginBottom: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}
    >
      <strong style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {estilo.icono} {titulo}
      </strong>
      <div style={{ marginTop: "6px" }}>{children}</div>
    </div>
  );
}

export default Alerta;

function Tarjeta() {
  const datos = {
    titulo: "Mi Tarjeta Destacada",
    descripcion: "Esta tarjeta muestra información usando JSX y estilos modernos.",
    etiquetas: ["React", "JSX", "Componentes"],
    destacado: true
  };

  return (
    <div
      style={{
        background: datos.destacado
          ? "rgba(200, 225, 255, 0.9)"
          : "rgba(230, 242, 255, 0.9)",
        padding: "20px",
        borderRadius: "16px",
        border: "none",
        boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
        color: "#0f172a",
        backdropFilter: "blur(6px)",
        fontFamily: "Poppins, Arial, sans-serif"
      }}
    >
      <h3 style={{ marginTop: 0, marginBottom: "10px", color: "#1e3a8a", textAlign: "center" }}>
        {datos.titulo}
      </h3>

      <p style={{ marginBottom: "12px", textAlign: "center" }}>
        {datos.descripcion}
      </p>

      <div
        style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          justifyContent: "center",   
          alignItems: "center"
        }}
      >
        {datos.etiquetas.map((tag, index) => (
          <span
            key={index}
            style={{
              background: "#4f8cff",
              color: "white",
              padding: "6px 10px",
              borderRadius: "12px",
              fontSize: "13px",
              fontWeight: "500"
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Tarjeta;

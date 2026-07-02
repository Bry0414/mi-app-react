import { useState } from "react";

function Acordeon({ titulo, children }) {
  const [expandido, setExpandido] = useState(false);

  return (
    <div
      style={{
        background: "rgba(200, 240, 200, 0.8)",
        padding: "15px",
        borderRadius: "12px",
        marginBottom: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}
    >
      <div
        onClick={() => setExpandido(!expandido)}
        style={{
          cursor: "pointer",
          fontWeight: "600",
          display: "flex",
          justifyContent: "space-between",
          color: "#0f3d1e"
        }}
      >
        {titulo}
        <span>{expandido ? "▼" : "►"}</span>
      </div>

      {expandido && <div style={{ marginTop: "10px" }}>{children}</div>}
    </div>
  );
}

export default Acordeon;

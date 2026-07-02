import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AppLab2 from "./Laboratorio2/AppLab2.jsx";
import AppLab3 from "./Laboratorio3/AppLab3.jsx";
import AppLab4 from "./Laboratorio4/AppLab4.jsx";
import AppLab5 from "./Laboratorio5/AppLab5.jsx";

function App() {
  const [lab, setLab] = useState("lab3");
  const navigate = useNavigate();

  return (
    <div
      style={{
        fontFamily: "Poppins, Arial, sans-serif",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #a8c5ff, #d7e8ff)",
        color: "#1e293b",
        paddingBottom: "40px",
        transition: "0.4s ease",
      }}
    >
      <header
        style={{
          padding: "20px 28px",
          background: "rgba(255, 255, 255, 0.35)",
          backdropFilter: "blur(12px)",
          borderBottom: "2px solid rgba(255,255,255,0.5)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          borderRadius: "0 0 20px 20px",
          animation: "fadeIn 0.8s ease",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "30px", fontWeight: "700" }}>
          🌤️ Proyecto de Laboratorios
        </h1>

        <p style={{ marginTop: "6px", color: "#334155", fontSize: "16px" }}>
          Selecciona qué laboratorio quieres ver:
        </p>

        <div style={{ marginTop: "14px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <button
            onClick={() => setLab("lab2")}
            style={{
              padding: "10px 20px",
              background: lab === "lab2" ? "#4f8cff" : "#e3eeff",
              color: lab === "lab2" ? "#fff" : "#1e3a8a",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              transition: "0.3s",
              transform: lab === "lab2" ? "scale(1.07)" : "scale(1)",
            }}
          >
            Laboratorio 2
          </button>

          <button
            onClick={() => setLab("lab3")}
            style={{
              padding: "10px 20px",
              background: lab === "lab3" ? "#4f8cff" : "#e3eeff",
              color: lab === "lab3" ? "#fff" : "#1e3a8a",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              transition: "0.3s",
              transform: lab === "lab3" ? "scale(1.07)" : "scale(1)",
            }}
          >
            Laboratorio 3
          </button>

          <button
            onClick={() => setLab("lab4")}
            style={{
              padding: "10px 20px",
              background: lab === "lab4" ? "#4f8cff" : "#e3eeff",
              color: lab === "lab4" ? "#fff" : "#1e3a8a",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              transition: "0.3s",
              transform: lab === "lab4" ? "scale(1.07)" : "scale(1)",
            }}
          >
            Laboratorio 4
          </button>

          <button
            onClick={() => {
              setLab("lab5");
              navigate("/lab5");
            }}
            style={{
              padding: "10px 20px",
              background: lab === "lab5" ? "#4f8cff" : "#e3eeff",
              color: lab === "lab5" ? "#fff" : "#1e3a8a",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              transition: "0.3s",
              transform: lab === "lab5" ? "scale(1.07)" : "scale(1)",
            }}
          >
            Laboratorio 5
          </button>
        </div>
      </header>

      <main
        style={{
          padding: "32px",
          marginTop: "20px",
          background: "rgba(255,255,255,0.45)",
          backdropFilter: "blur(14px)",
          borderRadius: "20px",
          width: "90%",
          maxWidth: "1000px",
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          animation: "slideUp 0.7s ease",
        }}
      >
        {lab === "lab2" && <AppLab2 />}
        {lab === "lab3" && <AppLab3 />}
        {lab === "lab4" && <AppLab4 />}
        {lab === "lab5" && <AppLab5 />}
      </main>
    </div>
  );
}

export default App;

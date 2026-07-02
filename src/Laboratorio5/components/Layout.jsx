import { NavLink, Outlet } from "react-router-dom";
import { useNotas } from "../context/NotasContext.jsx";

function Layout() {
  const { state } = useNotas();

  return (
    <div style={{ padding: "20px" }}>
      <header
        style={{
          background: "#ede9fe",
          padding: "20px",
          borderRadius: "16px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ color: "#4c1d95" }}>💜 MisNotas</h1>

        <nav style={{ display: "flex", gap: "16px", marginTop: "12px" }}>
          <NavLink
            to="/lab5"
            style={({ isActive }) => ({
              padding: "10px 16px",
              borderRadius: "10px",
              background: isActive ? "#7c3aed" : "#f5f3ff",
              color: isActive ? "#fff" : "#4c1d95",
              textDecoration: "none",
              fontWeight: "600",
              boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
            })}
          >
            Inicio
          </NavLink>

          <NavLink
            to="/lab5/notas"
            style={({ isActive }) => ({
              padding: "10px 16px",
              borderRadius: "10px",
              background: isActive ? "#7c3aed" : "#f5f3ff",
              color: isActive ? "#fff" : "#4c1d95",
              textDecoration: "none",
              fontWeight: "600",
              boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
            })}
          >
            Notas
          </NavLink>

          <NavLink
            to="/lab5/notas/nueva"
            style={({ isActive }) => ({
              padding: "10px 16px",
              borderRadius: "10px",
              background: isActive ? "#7c3aed" : "#f5f3ff",
              color: isActive ? "#fff" : "#4c1d95",
              textDecoration: "none",
              fontWeight: "600",
              boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
            })}
          >
            Nueva Nota
          </NavLink>
        </nav>

        <p style={{ marginTop: "12px", color: "#4c1d95", fontWeight: "600" }}>
          Total de notas: {state.notas.length}
        </p>
      </header>

      <main
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Outlet />
      </main>

      <footer
        style={{
          marginTop: "20px",
          textAlign: "center",
          color: "#4c1d95",
          fontWeight: "600",
        }}
      >
        © 2026 MisNotas
      </footer>
    </div>
  );
}

export default Layout;

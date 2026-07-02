import { Routes, Route } from "react-router-dom";
import { NotasProvider } from "./context/NotasContext.jsx";

import Layout from "./components/Layout.jsx";
import Inicio from "./pages/Inicio.jsx";
import Notas from "./pages/Notas.jsx";
import NuevaNota from "./pages/NuevaNota.jsx";
import DetalleNota from "./pages/DetalleNota.jsx";
import EditarNota from "./pages/EditarNota.jsx";
import NoEncontrada from "./pages/NoEncontrada.jsx";

function AppLab5() {
  return (
    <NotasProvider>
      <div
        style={{
          background: "linear-gradient(135deg, #d8b4fe, #f3e8ff)",
          padding: "20px",
          borderRadius: "20px",
          minHeight: "100vh",
        }}
      >
        <Routes>
          <Route path="/lab5" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="notas">
              <Route index element={<Notas />} />
              <Route path="nueva" element={<NuevaNota />} />
              <Route path=":id" element={<DetalleNota />} />
              <Route path=":id/editar" element={<EditarNota />} />
            </Route>
            <Route path="*" element={<NoEncontrada />} />
          </Route>
        </Routes>
      </div>
    </NotasProvider>
  );
}

export default AppLab5;

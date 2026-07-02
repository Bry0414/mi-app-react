import Perfil from "./Perfil.jsx";
import Clima from "./Clima.jsx";
import EstadoPedido from "./EstadoPedido.jsx";
import MensajeBienvenida from "./MensajeBienvenida.jsx";
import ListaHabilidades from "./ListaHabilidades.jsx";
import ListaProductos from "./ListaProductos.jsx";
import ListaTareas from "./ListaTareas.jsx";
import Tarjeta from "./Tarjeta.jsx";
import Dashboard from "./Dashboard.jsx";

function AppLab2() {
  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Poppins, Arial, sans-serif",
        background: "rgba(150, 185, 240, 0.55)", // 🔵 un poquito más oscuro
        borderRadius: "20px",
        backdropFilter: "blur(12px)",
        boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
        color: "#071524" // 🔵 azul MUY oscuro para contraste perfecto
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          marginBottom: "20px",
          fontWeight: "700",
          color: "#071524"
        }}
      >
        Laboratorio 2 - Fundamentos de React
      </h1>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ marginBottom: "10px", color: "#0d2f66" }}>
          Ejercicio 1 - Perfil
        </h2>
        <Perfil />
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ marginBottom: "10px", color: "#0d2f66" }}>
          Ejercicio 2 - Clima
        </h2>
        <Clima />
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ marginBottom: "10px", color: "#0d2f66" }}>
          Ejercicio 3 - Estado del Pedido
        </h2>
        <EstadoPedido />
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ marginBottom: "10px", color: "#0d2f66" }}>
          Ejercicio 4 - Mensaje de Bienvenida
        </h2>
        <MensajeBienvenida />
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ marginBottom: "10px", color: "#0d2f66" }}>
          Ejercicio 5 - Lista de Habilidades
        </h2>
        <ListaHabilidades />
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ marginBottom: "10px", color: "#0d2f66" }}>
          Ejercicio 6 - Lista de Productos
        </h2>
        <ListaProductos />
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ marginBottom: "10px", color: "#0d2f66" }}>
          Ejercicio 7 - Lista de Tareas
        </h2>
        <ListaTareas />
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ marginBottom: "10px", color: "#0d2f66" }}>
          Ejercicio 8 - Tarjeta
        </h2>
        <Tarjeta />
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ marginBottom: "10px", color: "#0d2f66" }}>
          Ejercicio 9 - Dashboard
        </h2>
        <Dashboard />
      </section>
    </div>
  );
}

export default AppLab2;
  
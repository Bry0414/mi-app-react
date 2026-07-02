import Perfil from "./Perfil.jsx";
import Clima from "./Clima.jsx";
import EstadoPedido from "./EstadoPedido.jsx";
import MensajeBienvenida from "./MensajeBienvenida.jsx";
import ListaHabilidades from "./ListaHabilidades.jsx";
import ListaProductos from "./ListaProductos.jsx";
import ListaTareas from "./ListaTareas.jsx";
import Tarjeta from "./Tarjeta.jsx";
import Dashboard from "./Dashboard.jsx";

function Laboratorio2() {
  return (
    <div>
      <h1>Laboratorio 2 - Fundamentos de React</h1>

      <section>
        <h2>Ejercicio 1 - Perfil</h2>
        <Perfil />
      </section>

      <section>
        <h2>Ejercicio 2 - Clima</h2>
        <Clima />
      </section>

      <section>
        <h2>Ejercicio 3 - Estado del Pedido</h2>
        <EstadoPedido />
      </section>

      <section>
        <h2>Ejercicio 4 - Mensaje de Bienvenida</h2>
        <MensajeBienvenida />
      </section>

      <section>
        <h2>Ejercicio 5 - Lista de Habilidades</h2>
        <ListaHabilidades />
      </section>

      <section>
        <h2>Ejercicio 6 - Lista de Productos</h2>
        <ListaProductos />
      </section>

      <section>
        <h2>Ejercicio 7 - Lista de Tareas</h2>
        <ListaTareas />
      </section>

      <section>
        <h2>Ejercicio 8 - Tarjeta</h2>
        <Tarjeta />
      </section>

      <section>
        <h2>Ejercicio 9 - Dashboard</h2>
        <Dashboard />
      </section>
    </div>
  );
}

export default Laboratorio2;

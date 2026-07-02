function Dashboard() {
  const usuario = { nombre: "Bryan", email: "Bryan@gmail.com", rol: "admin" };

  const notificaciones = [
    { id: 1, mensaje: "Nueva tarea asignada", leida: false },
    { id: 2, mensaje: "Actualización disponible", leida: true },
    { id: 3, mensaje: "Mensaje de Bryan", leida: false },
    { id: 4, mensaje: "Reunión confirmada", leida: true },
  ];

  const actividadReciente = [
    { id: 1, accion: "Inició sesión", fecha: "16/06/2026" },
    { id: 2, accion: "Subió un archivo", fecha: "15/06/2026" },
    { id: 3, accion: "Editó perfil", fecha: "14/06/2026" },
  ];

  const noLeidas = notificaciones.filter((n) => !n.leida);

  return (
    <>
      <section>
        <h2>Información del usuario</h2>
        <p>Nombre: {usuario.nombre}</p>
        <p>Email: {usuario.email}</p>
        <p>Rol: {usuario.rol}</p>
      </section>

      <section>
        <h2>Notificaciones ({noLeidas.length} sin leer)</h2>
        {notificaciones.length === 0 ? (
          <p>No tienes notificaciones pendientes</p>
        ) : (
          <ul>
            {notificaciones.map((n) => (
              <li
                key={n.id}
                style={{
                  fontWeight: n.leida ? "normal" : "bold",
                  opacity: n.leida ? 0.6 : 1,
                }}
              >
                {n.mensaje}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2>Actividad reciente</h2>
        {actividadReciente.length === 0 ? (
          <p>No hay actividad reciente</p>
        ) : (
          <ul>
            {actividadReciente.map((a) => (
              <li key={a.id}>
                {a.accion} - {a.fecha}
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

export default Dashboard;

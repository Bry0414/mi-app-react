function ListaTareas() {
  const tareas = [
    { id: 1, titulo: "Estudiar React", completada: false, prioridad: "alta" },
    { id: 2, titulo: "Hacer ejercicio", completada: true, prioridad: "media" },
    { id: 3, titulo: "Leer un libro", completada: false, prioridad: "baja" },
    { id: 4, titulo: "Preparar la cena", completada: true, prioridad: "alta" },
    { id: 5, titulo: "Pagar servicios", completada: false, prioridad: "media" },
    { id: 6, titulo: "Llamar a mamá", completada: true, prioridad: "baja" },
    { id: 7, titulo: "Organizar escritorio", completada: false, prioridad: "alta" },
  ];

  const pendientes = tareas.filter((t) => !t.completada);
  const completadas = tareas.filter((t) => t.completada);

  return (
    <div>
      <h3>Tareas pendientes ({pendientes.length})</h3>
      {pendientes.length === 0 ? (
        <p>No hay tareas pendientes</p>
      ) : (
        <ul>
          {pendientes.map((t) => (
            <li
              key={t.id}
              style={{
                color: t.prioridad === "alta" ? "red" : "black",
                fontWeight: t.prioridad === "alta" ? "bold" : "normal",
              }}
            >
              {t.titulo} ({t.prioridad})
            </li>
          ))}
        </ul>
      )}

      <h3>Tareas completadas ({completadas.length})</h3>
      {completadas.length === 0 ? (
        <p>No hay tareas completadas</p>
      ) : (
        <ul>
          {completadas.map((t) => (
            <li key={t.id} style={{ textDecoration: "line-through" }}>
              {t.titulo}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaTareas;

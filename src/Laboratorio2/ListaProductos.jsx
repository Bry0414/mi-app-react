function ListaProductos() {
  const productos = [
    { id: 1, nombre: "Laptop", precio: 1200, disponible: true },
    { id: 2, nombre: "Mouse", precio: 25, disponible: false },
    { id: 3, nombre: "Teclado", precio: 45, disponible: true },
    { id: 4, nombre: "Monitor", precio: 300, disponible: false },
    { id: 5, nombre: "Auriculares", precio: 80, disponible: true },
  ];

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((p) => (
          <tr key={p.id}>
            <td>{p.nombre}</td>
            <td>${p.precio.toFixed(2)}</td>
            <td style={{ color: p.disponible ? "green" : "red" }}>
              {p.disponible ? "Disponible" : "Agotado"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListaProductos;

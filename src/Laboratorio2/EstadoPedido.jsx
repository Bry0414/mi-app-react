function EstadoPedido() {
  const estado = "enviado";

  return (
    <div>
      {estado === "pendiente" && <p>⏳ Tu pedido está siendo procesado</p>}
      {estado === "enviado" && <p>📦 Tu pedido está en camino</p>}
      {estado === "entregado" && <p>✅ Tu pedido ha sido entregado</p>}
      {estado === "cancelado" && <p>❌ Tu pedido fue cancelado</p>}

      {estado === "enviado" && (
        <p>Tiempo estimado de entrega: 2-3 días hábiles</p>
      )}
    </div>
  );
}

export default EstadoPedido;

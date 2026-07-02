function BotonAccion({
  texto,
  variante = "primario",
  disabled = false,
  onClick
}) {
  const colores = {
    primario: "#1b7f3a",
    secundario: "#0a3a5f",
    peligro: "#b91c1c"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        background: colores[variante],
        color: "white",
        padding: "10px 16px",
        border: "none",
        borderRadius: "10px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        fontFamily: "Poppins, sans-serif",
        marginRight: "10px"
      }}
    >
      {texto}
    </button>
  );
}

export default BotonAccion;

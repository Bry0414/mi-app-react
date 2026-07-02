function Modal({ titulo, abierto, children }) {
  if (!abierto) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "16px",
          width: "350px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          fontFamily: "Poppins, sans-serif"
        }}
      >
        <h3 style={{ marginTop: 0 }}>{titulo}</h3>
        {children}
      </div>
    </div>
  );
}

export default Modal;

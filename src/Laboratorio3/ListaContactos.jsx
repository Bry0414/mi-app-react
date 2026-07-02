import { useState } from "react";
import Modal from "./Modal.jsx";
import BotonAccion from "./BotonAccion.jsx";
import Alerta from "./Alerta.jsx";

function ListaContactos() {
  const [contactos, setContactos] = useState([
    { id: 1, nombre: "Ana", telefono: "111-111", favorito: true },
    { id: 2, nombre: "Luis", telefono: "222-222", favorito: false },
    { id: 3, nombre: "María", telefono: "333-333", favorito: true },
    { id: 4, nombre: "Pedro", telefono: "444-444", favorito: false },
    { id: 5, nombre: "Sofía", telefono: "555-555", favorito: false }
  ]);

  const [busqueda, setBusqueda] = useState("");
  const [soloFavs, setSoloFavs] = useState(false);

  const [modalAbierto, setModalAbierto] = useState(false);
  const [contactoAEliminar, setContactoAEliminar] = useState(null);

  const filtrados = contactos.filter((c) => {
    const texto = (c.nombre + c.telefono).toLowerCase();
    const b = busqueda.toLowerCase();
    return texto.includes(b);
  });

  const visibles = soloFavs
    ? filtrados.filter((c) => c.favorito)
    : filtrados;

  const favoritos = contactos.filter((c) => c.favorito).length;

  return (
    <div>
      <h3>
        Favoritos: {favoritos} / {contactos.length} — Resultados:{" "}
        {visibles.length}
      </h3>

      <input
        type="text"
        placeholder="Buscar..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "10px",
          border: "1px solid #1b7f3a",
          marginBottom: "15px",
          width: "100%"
        }}
      />

      <BotonAccion
        texto={soloFavs ? "Mostrar todos" : "Solo favoritos"}
        variante="primario"
        onClick={() => setSoloFavs(!soloFavs)}
      />

      {visibles.length === 0 && (
        <Alerta tipo="info" titulo="Sin resultados">
          No se encontraron contactos
        </Alerta>
      )}

      {visibles.map((c) => (
        <div
          key={c.id}
          style={{
            background: "rgba(200,240,200,0.7)",
            padding: "12px",
            borderRadius: "12px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <div>
            <strong>{c.nombre}</strong> — {c.telefono}
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <span
              style={{ cursor: "pointer" }}
              onClick={() =>
                setContactos((prev) =>
                  prev.map((x) =>
                    x.id === c.id ? { ...x, favorito: !x.favorito } : x
                  )
                )
              }
            >
              {c.favorito ? "★" : "☆"}
            </span>

            <BotonAccion
              texto="Eliminar"
              variante="peligro"
              onClick={() => {
                setContactoAEliminar(c);
                setModalAbierto(true);
              }}
            />
          </div>
        </div>
      ))}

      <Modal titulo="Confirmar eliminación" abierto={modalAbierto}>
        <p>¿Estás seguro de eliminar a {contactoAEliminar?.nombre}?</p>

        <BotonAccion
          texto="Cancelar"
          variante="secundario"
          onClick={() => setModalAbierto(false)}
        />

        <BotonAccion
          texto="Eliminar"
          variante="peligro"
          onClick={() => {
            setContactos((prev) =>
              prev.filter((x) => x.id !== contactoAEliminar.id)
            );
            setModalAbierto(false);
          }}
        />
      </Modal>
    </div>
  );
}

export default ListaContactos;

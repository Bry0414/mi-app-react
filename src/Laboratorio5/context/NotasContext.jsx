import { createContext, useContext, useReducer } from "react";

const NotasContext = createContext();

const inicial = {
  notas: [
    {
      id: Date.now().toString(),
      titulo: "Idea inicial",
      contenido: "Primer concepto del proyecto.",
      categoria: "ideas",
      fijada: true,
      fechaCreacion: new Date().toISOString(),
    },
    {
      id: (Date.now() + 1).toString(),
      titulo: "Tarea de estudio",
      contenido: "Repasar hooks de React.",
      categoria: "estudio",
      fijada: false,
      fechaCreacion: new Date().toISOString(),
    },
    {
      id: (Date.now() + 2).toString(),
      titulo: "Trabajo pendiente",
      contenido: "Enviar informe semanal.",
      categoria: "trabajo",
      fijada: true,
      fechaCreacion: new Date().toISOString(),
    },
    {
      id: (Date.now() + 3).toString(),
      titulo: "Nota personal",
      contenido: "Comprar frutas.",
      categoria: "personal",
      fijada: false,
      fechaCreacion: new Date().toISOString(),
    },
    {
      id: (Date.now() + 4).toString(),
      titulo: "Nueva idea",
      contenido: "Pensar en sistema de notas.",
      categoria: "ideas",
      fijada: false,
      fechaCreacion: new Date().toISOString(),
    },
  ],
  filtroCategoria: "todas",
  busqueda: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "AGREGAR_NOTA":
      return {
        ...state,
        notas: [...state.notas, action.payload],
      };

    case "ELIMINAR_NOTA":
      return {
        ...state,
        notas: state.notas.filter((n) => String(n.id) !== String(action.payload)),
      };

    case "EDITAR_NOTA":
      return {
        ...state,
        notas: state.notas.map((n) =>
          String(n.id) === String(action.payload.id)
            ? {
                ...n,
                titulo: action.payload.titulo,
                contenido: action.payload.contenido,
              }
            : n
        ),
      };

    case "TOGGLE_FIJADA":
      return {
        ...state,
        notas: state.notas.map((n) =>
          String(n.id) === String(action.payload)
            ? { ...n, fijada: !n.fijada }
            : n
        ),
      };

    case "CAMBIAR_FILTRO":
      return { ...state, filtroCategoria: action.payload };

    case "CAMBIAR_BUSQUEDA":
      return { ...state, busqueda: action.payload };

    default:
      return state;
  }
}

export function NotasProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, inicial);

  const agregarNota = (nota) =>
    dispatch({ type: "AGREGAR_NOTA", payload: nota });

  const eliminarNota = (id) =>
    dispatch({ type: "ELIMINAR_NOTA", payload: id });

  const editarNota = (id, titulo, contenido) =>
    dispatch({
      type: "EDITAR_NOTA",
      payload: { id, titulo, contenido },
    });

  const toggleFijada = (id) =>
    dispatch({ type: "TOGGLE_FIJADA", payload: id });

  const cambiarFiltro = (cat) =>
    dispatch({ type: "CAMBIAR_FILTRO", payload: cat });

  const cambiarBusqueda = (texto) =>
    dispatch({ type: "CAMBIAR_BUSQUEDA", payload: texto });

  return (
    <NotasContext.Provider
      value={{
        state,
        agregarNota,
        eliminarNota,
        editarNota,
        toggleFijada,
        cambiarFiltro,
        cambiarBusqueda,
      }}
    >
      {children}
    </NotasContext.Provider>
  );
}

export const useNotas = () => useContext(NotasContext);

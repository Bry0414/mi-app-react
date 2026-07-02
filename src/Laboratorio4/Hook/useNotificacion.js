import { useEffect, useState } from "react";

export function useNotificacion(duracion = 3000) {
  const [notificacion, setNotificacion] = useState(null);

  const mostrar = (mensaje, tipo = "info") => {
    setNotificacion({
      id: Date.now(),
      mensaje,
      tipo,
    });
  };

  const cerrar = () => setNotificacion(null);

  useEffect(() => {
    if (!notificacion) return;

    const id = setTimeout(() => {
      setNotificacion(null);
    }, duracion);

    return () => clearTimeout(id);
  }, [notificacion, duracion]);

  return { notificacion, mostrar, cerrar };
}

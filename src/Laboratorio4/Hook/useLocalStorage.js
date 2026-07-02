import { useEffect, useState } from "react";

export function useLocalStorage(clave, valorInicial) {
  const leer = () => {
    try {
      const item = localStorage.getItem(clave);
      return item ? JSON.parse(item) : valorInicial;
    } catch {
      return valorInicial;
    }
  };

  const [valor, setValor] = useState(leer);

  useEffect(() => {
    try {
      localStorage.setItem(clave, JSON.stringify(valor));
    } catch {}
  }, [clave, valor]);

  return [valor, setValor];
}

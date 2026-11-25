import { useEffect } from "react";
import { useDespacho, useSeleccion } from "../../app/hooks";
import { cargarPuestos } from "./puestosSlice";

export function ListaPuestos() {
  const despacho = useDespacho();
  const { lista, estado, error } = useSeleccion((s) => s.puestos);

  useEffect(() => {
    if (estado === "inactivo") {
      void despacho(cargarPuestos());
    }
  }, [estado, despacho]);

  if (estado === "cargando") return <p>Cargando puestos…</p>;
  if (estado === "error") return <p role="alert">{error}</p>;
  if (lista.length === 0) return <p>Todavía no hay puestos cargados.</p>;

  return (
    <ul>
      {lista.map((puesto) => (
        <li key={puesto.id}>
          <strong>{puesto.nombre}</strong> · {puesto.feriante} ({puesto.rubro})
        </li>
      ))}
    </ul>
  );
}

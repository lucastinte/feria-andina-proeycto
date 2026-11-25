import { useDispatch, useSelector } from "react-redux";
import type { Despacho, EstadoRaiz } from "./store";

export const useDespacho = useDispatch.withTypes<Despacho>();
export const useSeleccion = useSelector.withTypes<EstadoRaiz>();

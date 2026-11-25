import { configureStore } from "@reduxjs/toolkit";
import puestosReducer from "../features/puestos/puestosSlice";

export const store = configureStore({
  reducer: {
    puestos: puestosReducer,
  },
});

export type EstadoRaiz = ReturnType<typeof store.getState>;
export type Despacho = typeof store.dispatch;

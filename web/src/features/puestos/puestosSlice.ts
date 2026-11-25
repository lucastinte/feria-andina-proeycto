import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Puesto {
  id: number;
  nombre: string;
  feriante: string;
  rubro: string;
}

interface EstadoPuestos {
  lista: Puesto[];
  estado: "inactivo" | "cargando" | "listo" | "error";
  error: string | null;
}

const estadoInicial: EstadoPuestos = {
  lista: [],
  estado: "inactivo",
  error: null,
};

export const cargarPuestos = createAsyncThunk("puestos/cargar", async () => {
  const respuesta = await fetch("/api/puestos");
  if (!respuesta.ok) {
    throw new Error(`Error ${respuesta.status} al cargar puestos`);
  }
  return (await respuesta.json()) as Puesto[];
});

const puestosSlice = createSlice({
  name: "puestos",
  initialState: estadoInicial,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(cargarPuestos.pending, (estado) => {
        estado.estado = "cargando";
        estado.error = null;
      })
      .addCase(cargarPuestos.fulfilled, (estado, accion) => {
        estado.estado = "listo";
        estado.lista = accion.payload;
      })
      .addCase(cargarPuestos.rejected, (estado, accion) => {
        estado.estado = "error";
        estado.error = accion.error.message ?? "Error desconocido";
      });
  },
});

export default puestosSlice.reducer;

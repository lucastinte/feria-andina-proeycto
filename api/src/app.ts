import express, { type NextFunction, type Request, type Response } from "express";
import { rutasPuestos } from "./rutas/puestos.js";

export const app = express();

app.use(express.json());

app.get("/api/salud", (_req, res) => {
  res.json({ estado: "ok" });
});

app.use("/api/puestos", rutasPuestos);

app.use((error: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(error);
  res.status(500).json({ error: "Error interno del servidor" });
});

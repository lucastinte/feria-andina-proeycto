import { Router } from "express";
import { pool } from "../db/pool.js";

export interface Puesto {
  id: number;
  nombre: string;
  feriante: string;
  rubro: string;
}

export const rutasPuestos = Router();

rutasPuestos.get("/", async (_req, res, next) => {
  try {
    const { rows } = await pool.query<Puesto>(
      "SELECT id, nombre, feriante, rubro FROM puestos ORDER BY id",
    );
    res.json(rows);
  } catch (error) {
    next(error);
  }
});

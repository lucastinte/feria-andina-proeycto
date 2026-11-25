CREATE TABLE IF NOT EXISTS puestos (
  id        SERIAL PRIMARY KEY,
  nombre    TEXT NOT NULL,
  feriante  TEXT NOT NULL,
  rubro     TEXT NOT NULL,
  creado_en TIMESTAMPTZ NOT NULL DEFAULT now()
);

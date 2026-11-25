# Feria Andina

Monorepo con dos paquetes:

- `web/`: React + TypeScript + Redux Toolkit (Vite).
- `api/`: Node + Express + TypeScript + PostgreSQL.

## Desarrollo

```bash
cd api && npm install && npm run dev   # http://localhost:3000
cd web && npm install && npm run dev   # http://localhost:5173 (proxy /api -> :3000)
```

La API lee `DATABASE_URL` y `PUERTO` del entorno (ver `api/.env.example`).

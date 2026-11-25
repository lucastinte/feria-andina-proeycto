import { app } from "./app.js";

const puerto = Number(process.env.PUERTO ?? 3000);

app.listen(puerto, () => {
  console.log(`API Feria Andina escuchando en http://localhost:${puerto}`);
});

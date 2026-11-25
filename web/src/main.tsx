import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./App";
import { store } from "./app/store";

const raiz = document.getElementById("root");
if (!raiz) throw new Error("No se encontró el elemento #root");

createRoot(raiz).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);

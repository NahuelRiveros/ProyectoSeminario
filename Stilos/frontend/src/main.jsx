import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// import {ContextProvider } from './context/context'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

// De aqui partimos tenemos nuestro main el que va renderizar todo nuestros componentes
// StrictMode es una herramienta para destacar problemas potenciales en la aplicación
// context provider es nuestro contenedor de todas nuestros componentes nos sirve para reutilizar codigo facilmente entre componentes
// la app es basicamente de nuestra pantalla o cualquier cosa objeto que programemos y adentro contiene componentes exportados por un contexto
ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);

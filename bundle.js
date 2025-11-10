// Minimalny bundle React + Router bez build step (ESM importy z CDN)
import React from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18/client";
import { BrowserRouter, Routes, Route } from "https://esm.sh/react-router-dom@6";

function KluczPage() {
  return React.createElement(
    "div",
    {
      style: {
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      },
    },
    React.createElement("img", {
      src: "./klucz-foto.png",
      alt: "Klucz",
      style: {
        maxHeight: "100%",
        maxWidth: "100%",
        objectFit: "contain",
      },
    })
  );
}

function App() {
  return React.createElement(
    BrowserRouter,
    null,
    React.createElement(
      Routes,
      null,
      React.createElement(Route, { path: "/klucz", element: React.createElement(KluczPage) })
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));

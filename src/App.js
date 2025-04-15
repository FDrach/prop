import React from "react";
import "./App.css";
import Home from "./page/Home.jsx";

function App() {
  let persona = {
    nombre: "Agustin",
    edad: 25,
    estudios: "Programacion",
    Presente: false,
  };
  let personas =[
    {
      nombre:"Carlos",
      edad:25
    },
    {
      nombre:"Natalia",
      edad:20
    }
  ];
  return <Home persona={persona} personas={personas} />;
}

export default App;

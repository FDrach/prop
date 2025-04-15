import React from "react";
import "./App.css";
import Home from "./page/Home.jsx";
import './css/styles.css';

function App() {
  let persona = {
    nombre: "Agustin",
    edad: 25,
    estudios: "Programacion",
    presente: false,
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

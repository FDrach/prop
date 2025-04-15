import React from 'react';

const Footer = ({persona}) => {
  return (
    <footer className="app-footer">
      <p>Nombre: {persona.nombre} </p>
      <p>Edad: {persona.edad} </p>
      <p>Estudios: {persona.estudios} </p>
      <p>Presente: {persona.presente ? "Si" : "No"}</p>
    </footer>
  );
};

export default Footer;
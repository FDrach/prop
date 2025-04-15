import React from 'react';

const Main = ({personas}) => {
  return (
    <main class="app-main">
      <h2>Personas</h2>
      <div class="flex-center">
      {(
        personas.map((dato, llave) => (
          <div class="panel">
            <h3>{dato.nombre}</h3>
            {<p>Edad: {dato.edad}</p> }
          </div>
        ))
      )}
      </div>
    </main>
  );
};

export default Main;
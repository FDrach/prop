# Trabajo Práctico – Programación 3

**Año:** 2025
**Profesor:** Matías Sebastián Chocobar
**Carrera:** Tecnicatura Universitaria en Programación
**Tema:** Comunicación de Props y Renderizado de Arrays con .map()

---

## 🎯 Objetivos

*   Profundizar en el manejo de props en componentes React sin y con destructuring.
*   Practicar el recorrido dinámico de arrays de objetos mediante `.map()`.
*   Reforzar la estructura padre-hijo en la gestión de datos.
*   Fomentar la claridad en la transformación y presentación de datos.

## 📋 Consigna

Realizar un proyecto grupal en React donde:

*   **`App.js` (componente padre)** defina tres variables:
    ```javascript
    let nombre = "Pablo";

    let persona = {
      nombre: 'Carlos',
      edad: 20,
      curso: 'programación',
      Asistencia: false
    };

    let grupo = [
      { nombre: 'Lucas', edad: 25 },
      { nombre: 'Luciana', edad: 19 },
      { nombre: 'Julieta', edad: 26 },
      { nombre: 'Jorge', edad: 30 },
      { nombre: 'Cristian', edad: 30 }
    ];
    ```

*   Pasar estas tres variables completas por props al componente `Home.jsx` sin destructurar.

*   En `Home.jsx` recibir props, luego destructurar y reenviar cada dato como props individuales al componente `Main.jsx`.

*   En `Main.jsx` usar los datos destructurados para:
    *   Mostrar el nombre (string).
    *   Desplegar en lista el objeto persona y usar un ternario para Asistencia (`"Presente"` / `"Ausente"`).
    *   Recorrer el array `grupo` con `.map()`, mostrando nombre y edad de cada integrante.

## 📝 Requisitos Generales

*   Trabajo grupal: Desarrollo en clases.
*   Cada integrante debe tener su propio repositorio en GitHub con al menos 5 commits significativos.
*   En `App.js` incluir un comentario al inicio con nombre completo y legajo de cada integrante.
*   Uso de Create React App, componentes funcionales y hooks si fuese necesario.

## 📁 Estructura del Proyecto

```
src/
├── App.js
├── index.js
├── pages/
│   └── HomePages.jsx
└── components/
    ├── Home.jsx
    └── Main.jsx
```

## ⚙️ Tecnologías y Técnicas

*   React (CRA) y JSX.
*   Props, destructuring, `.map()`, ternario.
*   Git y GitHub para control de versiones.

## 🎨 Estética

*   Diseño limpio y legible.
*   Uso básico de CSS para separar secciones (paddings/margins).
*   Presentación clara de listas y títulos.

## 📬 Entrega

Enviar URL del repositorio al profesor vía email.

# Preentrega7-js
## Simulador de Materias
 
Proyecto de la cursada que simula la gestión de materias de una carrera: alta de materias, listado dinámico en el DOM y búsqueda en tiempo real. Continúa el TP anterior de POO y funciones de orden superior, migrando toda la interacción de `console.log` / `prompt` a manejo del DOM.
 
### Estructura del repositorio
 
```
├── index.html
├── css/
│   └── style.css
└── js/
    └── main.js
```
 
### Cómo correrlo
 
No requiere instalación ni dependencias. Basta con abrir `index.html` en el navegador (doble click o con la extensión Live Server de VS Code).
 
### Funcionalidades
 
- **Modelo `Materia`**: clase con propiedades `nombre`, `profesor`, `cuatrimestre` y `aprobada`, y métodos `calificar(nota)` y `cambiarProfesor(nuevoProfesor)`.
- **Alta de materias**: formulario con inputs de nombre, profesor y cuatrimestre. Al hacer click en "Agregar Materia" se crea un nuevo objeto y se agrega al array en memoria.
- **Renderizado dinámico**: cada materia del array se pinta como una tarjeta (`.materia-card`) en `#contenedor-materias`, reflejando sus propiedades y su estado (aprobada / pendiente) con un estilo visual distinto.
- **Búsqueda en tiempo real**: input de búsqueda con evento de teclado (`keyup`) que filtra las materias por nombre a medida que se escribe.
- **Funciones de orden superior**: `find`, `filter` y `reduce` aplicadas sobre el array de materias (búsqueda, filtrado de aprobadas y conteo de aprobadas), usadas para alimentar el renderizado en vez de mostrarse por consola.
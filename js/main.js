class Materia {
    constructor(nombre, profesor, cuatrimestre, aprobada = false) {
        this.nombre = nombre;
        this.profesor = profesor;
        this.cuatrimestre = cuatrimestre;
        this.aprobada = aprobada;
    }
    calificar(nota) {
        if (nota >= 7) {
            this.aprobada = true;
        } else {
            this.aprobada = false;
        }
    }
    cambiarProfesor(nuevoProfesor) {
        this.profesor = nuevoProfesor;
    }
}

const materia1 = new Materia("Objetos 1", "prof. Carlos Eduardo", "1C 2026");
const materia2 = new Materia("Estructura de Datos", "prof. Alberto Skay", "2C 2026", true);
const materia3 = new Materia("Base de Datos", "prof. Solari Beillinson", "1C 2026");
const materias = [materia1, materia2, materia3];

function buscarMateriaPorNombre(array, nombreBuscado) {
    return array.find(materia =>
        materia.nombre.toLowerCase().includes(nombreBuscado.toLowerCase())
    );
}

function filtrarMateriasPorNombre(array, texto) {
    return array.filter(materia =>
        materia.nombre.toLowerCase().includes(texto.toLowerCase())
    );
}

function filtrarMateriasAprobadas(array) {
    return array.filter(materia => materia.aprobada === true);
}

function contarMateriasAprobadas(array) {
    return array.reduce((acc, materia) => {
        return materia.aprobada ? acc + 1 : acc;
    }, 0);
}

//=========================================================================

const inputNombre = document.getElementById("input-nombre");
const inputProfesor = document.getElementById("input-profesor");
const inputCuatrimestre = document.getElementById("input-cuatrimestre");
const btnAgregar = document.getElementById("btn-agregar");

const inputBuscar = document.getElementById("input-buscar");

const contenedorMaterias = document.getElementById("contenedor-materias");

function renderizarMaterias(array) {
    contenedorMaterias.innerHTML = "";
    array.forEach(materia => {
        const claseEstado = materia.aprobada ? "aprobada" : "noAprobada"
        const textoEstado = materia.aprobada ? "Aprobada" : "Pendiente"

        const htmlMateria = `
            <div class="materia-card ${claseEstado}">
                <h3>${materia.nombre}</h3>
                <p>Profesor: ${materia.profesor}</p>
                <p>Cuatrimestre: ${materia.cuatrimestre}</p>
                <span class="estado">${textoEstado}</span>
            </div>
        `;
        contenedorMaterias.innerHTML += htmlMateria;
    });
}

renderizarMaterias(materias);


btnAgregar.addEventListener("click", () => {
    const nombre = inputNombre.value;
    const profesor = inputProfesor.value;
    const cuatrimestre = inputCuatrimestre.value;

    if (nombre.trim() === "" || profesor.trim() === "" || cuatrimestre.trim() === "") {
        return;
    }
    const nuevaMateria = new Materia(nombre, profesor, cuatrimestre);
    materias.push(nuevaMateria);
    renderizarMaterias(materias);
    inputNombre.value = "";
    inputProfesor.value = "";
    inputCuatrimestre.value = "";
});


inputBuscar.addEventListener("keyup", () => {
    const texto = inputBuscar.value;
    if (texto.trim() === "") {
        renderizarMaterias(materias);
    } else {
        const resultado = filtrarMateriasPorNombre(materias, texto);
        renderizarMaterias(resultado);
    }
});
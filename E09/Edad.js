// let nombre = prompt("Introduce tu nombre: ");
// let edad = prompt("introduce tu edad: ");
// let diasVividos = parseInt(edad) * 365;

// alert(`${nombre} has vivido aproximadamente ${diasVividos} días`);
let resultado = document.getElementById("resultado");

function calcularDiasVividos() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let diasVividos = edad * 365;
    resultado.innerText = `${nombre}, has vivido aproximadamente ${diasVividos} días.`
}
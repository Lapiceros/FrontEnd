let body = document.body;
let buttons = document.getElementsByTagName("button");
let capa = document.getElementById("capa")


for (let button of buttons) {

    button.addEventListener('click', e => {
        e.preventDefault();
        let target = document.querySelector('input[name="target"]:checked').value;

        if (target === 'fondo') {

            body.style.backgroundColor = button.value;
        } else {
            capa.style.backgroundColor = button.value;
        }
        
    });
}



function calcularMultiplos() {
    let suma = 0;
    let resultado = "";
    
    for (let i = 23; i < 1000; i += 23) {
        resultado += i + " ";
        suma += i;
    }
    
    document.getElementById("multiples").innerText = "Múltiplos de 23: " + resultado;
    document.getElementById("suma").innerText = "Suma total: " + suma;
}
calcularMultiplos();

function cambiarImagen() {
    let seleccion = document.getElementById("opciones").value;
    document.getElementById("imagen").src = seleccion;
}
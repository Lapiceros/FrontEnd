function calcularPotencia() {
    let base = parseFloat(document.getElementById('base').value);
    let exponente = parseFloat(document.getElementById('exponente').value);
    
    
    let resultado = Math.pow(base, exponente);
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}
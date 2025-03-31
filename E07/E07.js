function calcularPotencia() {
  let base = parseInt(document.getElementById("base").value);
  let exponente = parseInt(document.getElementById("exponente").value);

  let resultado = Math.pow(base, exponente);
  document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
}
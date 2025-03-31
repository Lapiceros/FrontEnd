const palabras = ["abadengo", "cazuela", "desfilar", "fulgente", "ciclista"];
let palabra, aciertos, fallos;

function iniciarJuego() {
  palabra = palabras[Math.floor(Math.random() * palabras.length)].toUpperCase();
  aciertos = Array(palabra.length).fill("_");
  fallos = 0;
  document.getElementById("fallos").innerText = fallos;
  document.getElementById("imagenAhorcado").src = "img/0.png";
  mostrarPalabra();
}

function mostrarPalabra() {
  document.getElementById("palabra").innerHTML = aciertos
    .map((l) => `<span class='letra'>${l}</span>`)
    .join(" ");
}

function verificarLetra() {
  let letra = document.getElementById("letra").value.toUpperCase();
  document.getElementById("letra").value = "";
  if (!letra.match(/[A-Z]/) || letra.length !== 1) return;

  if (palabra.includes(letra)) {
    for (let i = 0; i < palabra.length; i++) {
      if (palabra[i] === letra) aciertos[i] = letra;
    }
  } else {
    fallos++;
    document.getElementById("fallos").innerText = fallos;
    document.getElementById(
      "imagenAhorcado"
    ).src = `img/${fallos}.png`;
  }

  mostrarPalabra();
  verificarFin();
}

function verificarFin() {
  if (!aciertos.includes("_")) {
    alert("¡Felicidades! Has adivinado la palabra");
    reiniciarJuego();
  } else if (fallos >= 6) {
    alert("Has perdido. La palabra era: " + palabra);
    reiniciarJuego();
  }
}

function reiniciarJuego() {
  iniciarJuego();
}

iniciarJuego();

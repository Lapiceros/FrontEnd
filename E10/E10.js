const palabras = ["abadengo", "cazuela", "desfilar", "fulgente", "ciclista", "parangaricutirimicuaro", "supercalifragilisticoespialidoso", "popocatepetl", "iztaccihuatl", "hipopotomonstrosesquipedaliofobia"];
let palabra, aciertos, fallos;
let arrayLetras = [];

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
    .map(l => `<span class='letra'>${l}</span>`)
    .join(" ");
}

function verificarLetra() {
  let letra = document.getElementById("letra").value.toUpperCase();
  let letrasIntentadas = document.getElementById("LetrasIntentadas");

  document.getElementById("letra").value = "";
  if (!letra.match(/[A-Z]/) || letra.length !== 1) return;

  if(arrayLetras.includes(letra)) return;

  arrayLetras.push(letra);

  if (palabra.includes(letra)) {
    for (let i = 0; i < palabra.length; i++) {
      if (palabra[i] === letra) aciertos[i] = letra;
    }
  } else {
    fallos++;
    letrasIntentadas.innerText = `Letras intentadas: ${arrayLetras.join(", ")}`;
    document.getElementById("fallos").innerText = fallos;
    document.getElementById(
      "imagenAhorcado"
    ).src = `img/${fallos}.png`;
  }

  mostrarPalabra();
  verificarFin();
}

function verificarFin() {
  let modal = document.getElementById("modal");
  let message = document.getElementById("modal-message");
  
  if (!aciertos.includes("_")) {
    message.textContent= "¡Felicidades! Has adivinado la palabra";
    modal.style.display= "block";
    reiniciarJuego();
  } else if (fallos >= 6) {
    message.textContent = `Perdiste! la palabra era: ${palabra}`;
    modal.style.display = "block";
    reiniciarJuego();
  }
}

function CerrarModal(){
    let modal = document.getElementById("modal");
    modal.style.display = "none";

}

function reiniciarJuego() {
  iniciarJuego();
}

iniciarJuego();


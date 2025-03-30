const palabras = ["elefante", "caminata", "silencio", "armadura", "pinturas"];
        let palabraSecreta, letrasAdivinadas, intentosFallidos;

        function iniciarJuego() {
            palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)].toUpperCase();
            letrasAdivinadas = Array(palabraSecreta.length).fill("_");
            intentosFallidos = 0;
            document.getElementById("fallos").innerText = intentosFallidos;
            document.getElementById("imagenAhorcado").src = "ahorcado0.png";
            mostrarPalabra();
        }

        function mostrarPalabra() {
            document.getElementById("palabra").innerHTML = letrasAdivinadas.map(l => `<span class='letra'>${l}</span>`).join(" ");
        }

        function verificarLetra() {
            let letra = document.getElementById("letra").value.toUpperCase();
            document.getElementById("letra").value = "";
            if (!letra.match(/[A-Z]/) || letra.length !== 1) return;

            if (palabraSecreta.includes(letra)) {
                for (let i = 0; i < palabraSecreta.length; i++) {
                    if (palabraSecreta[i] === letra) letrasAdivinadas[i] = letra;
                }
            } else {
                intentosFallidos++;
                document.getElementById("fallos").innerText = intentosFallidos;
                document.getElementById("imagenAhorcado").src = `ahorcado${intentosFallidos}.png`;
            }

            mostrarPalabra();
            verificarFin();
        }

        function verificarFin() {
            if (!letrasAdivinadas.includes("_")) {
                alert("¡Felicidades! Has adivinado la palabra");
                reiniciarJuego();
            } else if (intentosFallidos >= 7) {
                alert("Has perdido. La palabra era: " + palabraSecreta);
                reiniciarJuego();
            }
        }

        function reiniciarJuego() {
            iniciarJuego();
        }

        iniciarJuego();




document.addEventListener("DOMContentLoaded", function () {
    const opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];
    let puntosUsuario = 0;
    let puntosOrdenador = 0;

    const botones = document.querySelectorAll(".boton-jugada");
    const contadorUsuario = document.getElementById("contador-usuario");
    const contadorOrdenador = document.getElementById("contador-ordenador");
    // const resultados = document.getElementById("resultados");

    botones.forEach(boton => {
        boton.addEventListener("click", function () {
            const eleccionUsuario = boton.dataset.jugada;
            const eleccionOrdenador = obtenerEleccionOrdenador();
            const resultado = obtenerResultado(eleccionUsuario, eleccionOrdenador);
            mostrarResultado(resultado, eleccionUsuario, eleccionOrdenador);
            actualizarPuntuacion(resultado);
        });
    });

    function obtenerEleccionOrdenador() {
        const indice = Math.floor(Math.random() * 5);
        return opciones[indice];
    }

    function obtenerResultado(usuario, ordenador) {
         if (usuario === ordenador) return "Empate";
         if ((usuario === "piedra" && ordenador === "lagarto") ||
             (usuario === "lagarto" && ordenador === "spock") ||
             (usuario === "spock" && ordenador === "tijera") ||
             (usuario === "tijera" && ordenador === "papel") ||
             (usuario === "papel" && ordenador === "piedra")) {
             return "Ganaste";}
         if ((usuario === "piedra" && ordenador === "tijera") ||
             (usuario === "tijera" && ordenador === "lagarto") ||
             (usuario === "lagarto" && ordenador === "papel") ||
             (usuario === "papel" && ordenador === "spock") ||
             (usuario === "spock" && ordenador === "piedra")) {
             return "Ganaste";}
         return "Perdiste";
    }

    function mostrarResultado(resultado, usuario, ordenador) {
        // resultados.insertAdjacentHTML('beforebegin', `Elegiste ${usuario}. La máquina eligió ${ordenador}. Resultado: ${resultado}`)
        console.log(`Elegiste ${usuario}. La máquina eligió ${ordenador}. Resultado: ${resultado}`);
    }

    function actualizarPuntuacion(resultado) {
        if (resultado === "Ganaste") {
            puntosUsuario++;
        } else if (resultado === "Perdiste") {
            puntosOrdenador++;
        }
        contadorUsuario.textContent = `Tus puntos: ${puntosUsuario}`;
        contadorOrdenador.textContent = `Puntos de la máquina: ${puntosOrdenador}`;
    };
});
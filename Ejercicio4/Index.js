//Array por defecto
let puntuaciones = [
    { nombre: "Pablo", puntuacion: 180 },
    { nombre: "Javier", puntuacion: 270 },
    { nombre: "Raquel", puntuacion: 70 },
    { nombre: "Mario", puntuacion: 310 },
    { nombre: "Miriam", puntuacion: 90 },
    { nombre: "Fernando", puntuacion: 105 },
    { nombre: "Laura", puntuacion: 210 },
    { nombre: "Julian", puntuacion: 520 },
];

// Filtrar jugadores con puntuaciones mayores a 100
let jugadoresTop = puntuaciones.filter(jugador => jugador.puntuacion > 100);

// Por consola mostramos el nuevo array con el filtro de > 100
// Para que solo aparezcan los jugadores con mas de 100 en puntuación
console.log(jugadoresTop);
// Abrimos la termnal, nos vamos a la carpeta de Ejercicio4 y ejecutamos el js con node (node index.js)

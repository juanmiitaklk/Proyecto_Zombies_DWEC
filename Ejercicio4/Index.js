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
console.log(jugadoresTop);

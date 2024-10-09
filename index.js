class Zombi {
  constructor(nombre, puntosVida, potencia) {
    this.nombre = nombre;
    this.puntosVida = puntosVida;
    this.potencia = potencia;
  }
  atacar(objetivo) {
    console.log(
      `${this.nombre} ataca a ${objetivo} y le causa ${this.potencia} puntos de daño`
    );
  }
}

class Jugador {
  constructor(nombre, ocupacion, puntosVida, faccion) {
    this.nombre = nombre;
    this.ocupacion = ocupacion;
    this.puntosVida = Math.min(puntosVida, 1);
    this.faccion = faccion;
  }

  toString() {
    return `Nombre: ${this.nombre}, 
    Ocupación: ${this.ocupacion}, 
    Puntos de Vida: ${this.puntosVida}, 
    Facción: ${this.faccion}`;
  }
}

// Creando dos jugadores de ejemplo
const jugador1 = new Jugador("José", "Francotirador", 80, "El Ferrocarril");
const jugador2 = new Jugador("Juanma", "Guerrero", 110, "Los minutemens"); 


console.log(jugador1.toString());
console.log(jugador2.toString());

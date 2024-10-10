// Clase base Zombi
class Zombi {
  constructor(nombre, puntosVida, potencia) {
      this.nombre = nombre;
      this.puntosVida = puntosVida;
      this.potencia = potencia;
  }
  
  atacar(objetivo) {
      console.log(
          `${this.nombre} ataca a ${objetivo} y le causa ${this.potencia} puntos de daño`
      );
  }
}

// Subclase Abominacion que hereda de Zombi
class Abominacion extends Zombi {
  constructor(nombre, puntosVida, potencia) {
      super(nombre, puntosVida, potencia); // Esto es del constructor de zombi
  }

  // Metodo que realiza 3 ataques seguidos
  ataqueMultiple(objetivo) {
      console.log(`${this.nombre} realiza un ataque múltiple a ${objetivo}:`);
      for (let i = 0; i < 3; i++) { // bucle para contar los ataques hasta 3
          this.atacar(objetivo); // ataque basico
      }
  }
}

// Crear un objeto Abominacion
const abominacion = new Abominacion("Abominación Terrorífica", 150, 25);

// Ejecutar el ataqueMultiple
abominacion.ataqueMultiple("el Jugador");

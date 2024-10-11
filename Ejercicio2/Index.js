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
      for (let i = 0; i < 3; i++) { // bucle para contar los ataques (hasta 3)
          this.atacar(objetivo); // ataque basico al objetivo sin declarar
      }
  }
}

// Crear un objeto Abominacion
const abominacion = new Abominacion("Abominación Pablo", 150, 25); //El paramentro de potencia (25) indica el daño que causa

// Ejecutar el ataqueMultiple
abominacion.ataqueMultiple("Juanma"); //Declaramos objetivo para que aparezca
// Abrimos la termnal, nos vamos a la carpeta de Ejercicio2 y ejecutamos el js con node (node index.js)


//Clase zombie por defecto
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

class Abominacion extends Zombi {
    constructor(nombre, puntosVida, potencia){
        super()
    }
}

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

//Clase Jugador
class Jugador {
  constructor(nombre, ocupacion, puntosVida, faccion) { //Constructor
    this.nombre = nombre;
    this.ocupacion = ocupacion;
    this.puntosVida = 100; // Lo hacemos fijo y asi no lo tenemos que declarar cuando creamos los jugadores
    this.faccion = faccion;
  }

  //Metodo para mostrar las estadisticas de los jugadores
  toString() {
    return `Nombre: ${this.nombre}, 
    Ocupación: ${this.ocupacion}, 
    Puntos de Vida: ${this.puntosVida}, 
    Facción: ${this.faccion}`;
  }
}

//Creamos dos jugadores como ejemplo
const jugador1 = new Jugador("José", "Francotirador", "El Ferrocarril");
const jugador2 = new Jugador("Juanma", "Guerrero", "Los minutemens"); 

//Y lo mostramos en consola 
console.log(jugador1.toString());
console.log(jugador2.toString());
// Abrimos la termnal, nos vamos a la carpeta de Ejercicio1 y ejecutamos el js con node (node index.js)

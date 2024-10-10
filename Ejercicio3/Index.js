// Clase base Consumible
class Consumible {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    consumir(jugador) {
      console.log(jugador.nombre + " consume " + this.nombre + " y no tiene ningún efecto");
      //Esto para el caso en el que ya tengo los puntos maximos de vida
    }
  }
  
  // Clase PlantaCurativa que hereda de Consumible
  class PlantaCurativa extends Consumible {
    constructor(nombre, poder) { // Nombre que hereda de consumible y poder que realiza ese consumible
      super(nombre);  // Llama al constructor de la clase Consumible
      this.poder = poder;  // Poder de curación de la planta
    }
  
    consumir(jugador) {  //Lo que ocurre si el jugador consume el consumible
      if ((this.poder + jugador.puntosVida) > jugador.maxPuntosVida) { 
        //Si el poder (curacion) + los puntos de vida del jugador son superiores a los maximos establecidos
        //Se ajustan para que el jugador tenga los maximos ejm: J1(9pv) + manzana(+4pv) = J1(10pv)
        jugador.puntosVida = jugador.maxPuntosVida;
        console.log(`${jugador.nombre} consume ${this.nombre} y ahora tien la vida máxima`);
      } else {
        // Si no se sobrepasan se suman los puntos de curación a los puntos de vida actuales
        // ejm: J1(2pv) + manzana(4pv) = J1(6pv)
        jugador.puntosVida += this.poder;
        // Muestra el resultado por consola. Var: nombre jugador, nombre consumible, puntos de vida jugador
        console.log(`${jugador.nombre} consume ${this.nombre} y ahora tiene ${jugador.puntosVida} puntos de vida.`);
      }
      
      
    }
  }
  
  // Creación de objetos
  let manzana = new Consumible('Manzana'); // Objeto consumible por defecto
  let ricardo = { // Objeto Jugador por defecto
    nombre: 'Ricardo',
    potencia: 10,
    puntosVida: 2,
    maxPuntosVida: 10,
    consumir: function (consumible) {
      consumible.consumir(this);
    }
  };
  
  // Crear una planta curativa (Hierbabuena) y le colocmaos la funcion math.ceil que redondea hacia arriba y
  // la funcion math.random que comprende numeros entre el 0 y el 8 aleatorio, haciendo así que sea mas divertido
  let hierbabuena = new PlantaCurativa('Hierbabuena', Math.ceil(Math.random() * 8));
  ricardo.consumir(hierbabuena);  // Cura a Ricardo y muestra sus puntos de vida
  
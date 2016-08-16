//Ejercicios hechos para el Curso de Javascript de La UES + Independientes
//Autor: Iván Hugo Guevara
//Aclaración: Se utiliza la Guía de Paradigmas de Programación de Smalltalk

//Ejercicio 1a - Pepita básica

var pepita = {
  initialize: function () {
    this._energia = 0;
    this._lugarActual = BuenosAires;
  },
  vuela: function (unaCantDeKms) {
    this._energia = this._energia - (unaCantDeKms + 10);
  },

  come: function (unaCantDeGramosAlpiste) {
    this._energia = this._energia + 4*unaCantDeGramosAlpiste;
  }
};

//Prueba de escritorio
pepita.initialize();
pepita.come(100);
console.log(pepita._energia);
pepita.vuela(100);
console.log(pepita._energia);

//Parte b

var MarDelPlata = {
  kms: 400
}

var Lujan = {
  kms: 30
}

var BuenosAires = {
  kms: 0
}

pepita.andaA = function (unLugar) {
  this._lugarActual = unLugar;
  this.vuela(unLugar.kms);
}

pepita.podesIrA = function(unDestino) {
  return this._energia > (unDestino.kms + 10);
};

console.log(pepita.podesIrA(MarDelPlata));

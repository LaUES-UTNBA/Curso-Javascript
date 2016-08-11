"use strict"
var pepe = {
  calcularSueldo: function () {
    return this._neto + this._bonoXPresentismo.calcular() + this._bonoXResultados.calcular(this);
  }
}

var bonoPresentismo = {
  calcularPresentismo: function (diasFaltados) {
    if (diasFaltados == 0)
       return 100;
    else
      if (diasFaltados == 1)
       return 50;
      else
       return 0;
  }
}

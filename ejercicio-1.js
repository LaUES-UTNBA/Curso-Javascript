/*Ejercicio Nro 1

La facultad esta muy atenta a como sus alumnos estan jugando al Pokemon GO, es por eso que nos encargo un sistema para contabilizar que tipos de Pokemones
se encuentran en el Campus y su poder de ataque. Para poder contabilizar esto se cuenta con un array que posee la siguiente estructura:

[ [nombreDelPokemon,especie,poderDeAtaque,ubicacion], .....]

Se desea calcular:
-Cantidad de especies de cada tipo
-La especie que tiene mayor cantidad de Pokemones
-El nombre del pokemon de mayor poder de ataque
-Nombre y ubicacion de cada uno

*/

//Solucion Nro 1pro

function _buscarPokemon (pokemon, especies) {
   return especies.filter(function (especie) {
     return especie.nombre === pokemon[1];
   });
}


function _ubicar (pokemon, especies) {
    let indiceEspecieUbicada = _buscarPokemon(pokemon,especies);

    if(indiceEspecieUbicada == null){
      especies.push({ especie : pokemon.especie, cantidadEspecies: 1 })
    } else {
      especies[indiceEspecieUbicada].cantidadEspecies = especies[indiceEspecieUbicada].cantidadEspecies++;
    }
};

function cantidadEspeciesCadaTipo (listaDePokemones) {

  let especies = [];

  listaDePokemones.forEach(function (pokemon) {
      _ubicar(pokemon, especies);
  });

  return especies;
}

function especieConMayorCantidadDePokemones (listaDePokemones) {

  let cantidadEspeciesCadaTipo = this.cantidadEspeciesCadaTipo(listaDePokemones);

  cantidadEspeciesCadaTipo.sort(function (especie, otraEspecie) {
    return especie.cantidad > otraEspecie.cantidad;
  });

  return cantidadEspeciesCadaTipo[0].especie;

}

function nombrePokemonMayorPoderDeAtaque (listaDePokemones) {

  return listaDePokemones.sort(function (pokemon, otroPokemon ) {
    return pokemon[2] > otroPokemon[2];
  })[0];

}

function nombreYUbicacion (listaDePokemones) {

  return listaDePokemones.map(function (pokemon) {
    return [pokemon[0],pokemon[3]];
  });



}

var pokemonApp = angular.module('pokemonApp', []);

pokemonApp.controller('PokeCtrl', function ($scope) {
  $scope.pokemons = [
  {'name': 'Pikachu', 'type': 'Eletric'}

  ,{'name': 'Charmandaer', 'type': 'Fire'}

  ,{'name': 'Lugia', 'type': 'Psychic'}
  ];
});
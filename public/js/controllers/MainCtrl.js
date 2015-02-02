angular.module('MainCtrl', []).controller('MainController', function($scope, $location, Pokemon) {

    Pokemon.getAll().success(function(pokemons) {
        pokemons.forEach(function(pokemon) {
            pokemon.name = pokemon.name.replace('-', ' ');
        });
        $scope.Pokemons = pokemons;
    });
});

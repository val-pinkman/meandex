angular.module('PokemonCtrl', []).controller('PokemonController', function($scope, $location, $routeParams, Pokemon) {

    $scope.pokeId = $routeParams.pokeId;
    $scope.pokeUrl = 'img/pokemons/pokemon' + $scope.pokeId + '.jpg';

    Pokemon.getPokemon($scope.pokeId).success(function(poke) {
        $scope.poke = poke;
        $('.parallax').parallax();
        console.log(poke);
    });

});

angular.module('PokemonCtrl', []).controller('PokemonController', function($scope, $location, $routeParams, Pokemon) {

    $scope.pokeId = $routeParams.pokeId;
    $scope.pokeUrl = 'img/pokemons/pokemon' + $scope.pokeId + '.jpg';

    Pokemon.getPokemon($scope.pokeId).success(function(poke) {
        if(poke.evolutions.length > 0) {
            poke.evolutions.forEach(function(evo) {
                evo.id = parseInt(evo.resource_uri.replace('/api/v1/pokemon/', ''));
                evo.method = evo.method.replace('_', ' ');

            });
        }

        poke.pict = "http://img.pokemondb.net/artwork/" + poke.name.toLowerCase() + ".jpg";

        $scope.poke = poke;

        $('.parallax').parallax();
        console.log(poke);
    });

});

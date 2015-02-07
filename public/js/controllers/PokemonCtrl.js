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
        poke.total = poke.attack + poke.defense + poke.speed + poke.sp_atk + poke.sp_def + poke.hp;
        poke.percAtk = poke.attack / 255 * 100;
        poke.percSpAtk = poke.sp_atk / 255 * 100;
        poke.percDef = poke.defense / 255 * 100;
        poke.percSpDef = poke.sp_def / 255 * 100;
        poke.percSpeed = poke.speed / 255 * 100;
        poke.percHp = poke.hp / 255 * 100;

        $scope.poke = poke;

        $('.parallax').parallax();
        $('.tabs').tabs();
        console.log(poke);
    });

});

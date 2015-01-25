angular.module('MainCtrl', []).controller('MainController', function($scope, $location, Pokemon) {

    Pokemon.getAll().success(function(pokemons) {
        $scope.Pokemons = pokemons;
    });
});

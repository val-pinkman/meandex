angular.module('MainCtrl', []).controller('MainController', function($scope, Pokemon) {

    Pokemon.getAll().success(function(pokemons) {
        $scope.Pokemons = pokemons;
    });

});

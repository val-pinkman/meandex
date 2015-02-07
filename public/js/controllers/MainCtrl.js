angular.module('MainCtrl', []).controller('MainController', function($scope, $location, Pokemon, $document, $window) {

    $document.ready(function () {
        $scope.winWidth = $window.outerWidth;
        $scope.containerClass = $scope.winWidth > 600 ? 'container' : '';
        $scope.cardClass = $scope.winWidth > 600 ? 'card' : '';
    });

    $(window).on('resize', function () {
        $scope.winWidth = $window.outerWidth;
        $scope.containerClass = $scope.winWidth > 600 ? 'container' : '';
        $scope.cardClass = $scope.winWidth > 600 ? 'card' : '';
    });


    Pokemon.getAll().success(function(pokemons) {
        pokemons.forEach(function(pokemon) {
            pokemon.name = pokemon.name.replace('-', ' ');
        });
        $scope.Pokemons = pokemons;
    });
});

angular.module('MainCtrl', []).controller('MainController', function($scope, $location, Pokemon, $document, $window, $localStorage) {

    $document.ready(function () {
        $scope.config.limit = 151;
        $scope.winWidth = $window.outerWidth;
        $scope.containerClass = $scope.winWidth > 600 ? 'container' : '';
        $scope.cardClass = $scope.winWidth > 600 ? 'card' : '';

    });

    $(window).on('resize', function () {
        $scope.$apply(function() {
            $scope.winWidth = $window.outerWidth;
            $scope.containerClass = $scope.winWidth > 600 ? 'container' : '';
            $scope.cardClass = $scope.winWidth > 600 ? 'card' : '';
        });
    });

    if($localStorage.pokemons) {
        $scope.Pokemons = JSON.parse($localStorage.pokemons);
    } else {

        Pokemon.getAll().success(function(pokemons) {
            pokemons.forEach(function(pokemon) {
                pokemon.name = pokemon.name.replace('-', ' ');
            });
            $scope.Pokemons = pokemons;
            $localStorage.pokemons = JSON.stringify(pokemons);
            console.log('storage setup');

        });
    }


});

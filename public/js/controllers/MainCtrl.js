angular.module('MainCtrl', []).controller('MainController', function($scope, $location, Pokemon, $document, $window, $localStorage, $timeout) {

    $document.ready(function () {
        $scope.limit = 151;
        $scope.winWidth = $window.outerWidth;
        $scope.containerClass = $scope.winWidth > 600 ? 'container' : '';
        $scope.cardClass = $scope.winWidth > 600 ? 'card' : '';

        $scope.loadMore = function() {
            if($scope.limit = 651) {
                $scope.limit = 718;
            } else if ($scope.limit == 718) {

            } else {
                $scope.limit += 100;
            }
        }

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

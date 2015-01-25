angular.module('MainCtrl', []).controller('MainController', function($scope, $location, Pokemon) {

    Pokemon.getAll().success(function(pokemons) {
        $scope.Pokemons = pokemons;
    });

    $('.tabs-link').on('click', function() {
      var text = $(this).children('span.ng-binding').text();
      var path = text.toLowerCase();
      $location.url('/'+ path);
    });
});

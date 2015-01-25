angular.module('MainCtrl', []).controller('MainController', function($scope, $location, Pokemon) {

    Pokemon.getAll().success(function(pokemons) {
        $scope.Pokemons = pokemons;
    });

    $('.tabs-link').on('click', function() {
      var text = $(this).children('span.ng-binding').text();
      var path = text.toLowerCase();
      $location.url('/'+ path);
    });

    angular.element(document).ready(function () {
      if ($location.path() == '/types') {
        //console.log('types');
        //$('.tabs-link tabs-link--is-active').removeClass('tabs-link--is-active');
        //$('.tabs-link').last().trigger( "click" );
      } else if ($location.path() == '/moves') {
        //console.log('moves');
        //$('.tabs-link tabs-link--is-active').removeClass('tabs-link--is-active');
        //$('.tabs-link').first().trigger( "click" );
      }
    });
});

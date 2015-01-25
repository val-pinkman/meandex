angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'views/dex.html',
            controller: 'MainController'
        })

        .when('/moves', {
            templateUrl: 'views/moves.html',
            controller: 'MainController'
        })

        .when('/types', {
            templateUrl: 'views/types.html',
            controller: 'MainController'
        })

        .when('/pokemon', {
            templateUrl: 'views/pokemon.html',
            controller: 'PokemonController'
        });

    $locationProvider.html5Mode(true);

}]);

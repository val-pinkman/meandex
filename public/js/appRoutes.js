angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/pokemon', {
            templateUrl: 'views/pokemon.html',
            controller: 'PokemonController'
        });

    $locationProvider.html5Mode(true);

}]);

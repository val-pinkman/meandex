angular.module('appRoutes', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
        
    .state('home', {
        url: '/',
        templateUrl: 'views/dex.html',
        controller: 'MainController'
    })

    .state('dex', {
        url: '/dex/:id',
        templateUrl: 'views/pokemon.html',
        controller: 'PokemonController'
    })
    
    .state('moves', {
        url: '/moves',
        templateUrl: 'views/moves.html',
        controller: 'MainController'
    })

    .state('types', {
        url: '/types',
        templateUrl: 'views/types.html',
        controller: 'TypesController'
    });
});
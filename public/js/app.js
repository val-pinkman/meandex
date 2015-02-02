$(document).ready(function() {

    $('.parallax').parallax();
});
angular.module('meanDex', ['ngRoute', 'ui.router', 'appRoutes', 'MainCtrl', 'PokemonCtrl', 'PokemonService']);

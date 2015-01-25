angular.module('PokemonService', []).factory('Pokemon', ['$http', function($http) {

    return {

        getPokemon: function(i) {
            return $http.get('/api/pokemon/' + i);
        },

        getAll: function($scope) {
            return $http.get('/api/pokemons').error(function(err) {
                    console.log(err);
                });
        }

    }

}]);

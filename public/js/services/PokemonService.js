angular.module('PokemonService', []).factory('Pokemon', ['$http', function($http) {

    return {
        get: function(i) {
            return $http.get('/api/pokemon/' + i);
        },
        getAll: function($scope) {
            return $http.get('/api/pokemons')
                .success(function(response) {
                    console.log(response);
                })
                .error(function(err) {
                    console.log(err);
                });
        }


    }
}])

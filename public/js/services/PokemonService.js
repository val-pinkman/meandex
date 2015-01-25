angular.module('PokemonService', []).factory('Pokemon', ['$http', function($http) {

    function errorCallback(err) {
        console.log(err);
    }

    return {

        getPokemon: function(i) {
            return $http.get('/api/pokemon/' + i).error(errorCallback);
        },

        getAll: function($scope) {
            return $http.get('/api/pokemons')
                .success(function(response) {
                    //console.log(response);
                })
                .error(function(err) {
                    console.log(err);
                });
        },

        getMove: function(i) {
            return $http.get('/api/move/' + i).error(errorCallback);
        },

        getAbility: function(i) {
            return $http.get('/api/ability/' + i).error(errorCallback);
        }

    }

}]);

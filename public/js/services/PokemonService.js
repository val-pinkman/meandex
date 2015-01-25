angular.module('PokemonService', []).factory('Pokemon', ['$http', function($http) {

    function errorCallback(err) {
        console.log(err);
    }

    return {

        getPokemon: function(i) {
            return $http.get('/api/pokemon/' + i).error(errorCallback);
        },

        getAll: function($scope) {
<<<<<<< HEAD
            return $http.get('/api/pokemons')
                .success(function(response) {
                    //console.log(response);
                })
                .error(function(err) {
                    console.log(err);
                });
        }
=======
            return $http.get('/api/pokemons').error(errorCallback);
        },
>>>>>>> 445e6210b0e7c53a37c65f6a6bfef4e2f168a6aa

        getMove: function(i) {
            return $http.get('/api/move/' + i).error(errorCallback);
        },

        getAbility: function(i) {
            return $http.get('/api/ability/' + i).error(errorCallback);
        }

    }

}]);

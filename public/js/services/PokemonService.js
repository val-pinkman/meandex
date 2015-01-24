angular.module('PokemonService', []).factory('Pokemon', ['$http', function($http) {

    return {
        get: function() {
            return $http.get('/api/pokemon/4');
        },


    }
}])

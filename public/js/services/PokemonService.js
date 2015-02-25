angular.module('PokemonService', []).factory('Pokemon', ['$http', '$q', function($http, $q) {

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

        getSubEvo: function(i, subs) {
            var deferred = $q.defer();
            var self = this;
            var curr = i;
            var subs = subs || [];

            $http.get('/api/pokemon/' + (curr - 1))
                .success(function(pokemon) {

                    if(pokemon.evolutions.length != 0) {
                        pokemon.evolutions.forEach(function(evo) {
                            var id = parseInt(evo.resource_uri.replace('/api/v1/pokemon/', ''));
                            if(id == curr) {
                                subs.push({'id': id-1, 'name': pokemon.name.toLowerCase() });
                                if(id - 1 != 1) {
                                    self.getSubEvo(id - 1, subs);
                                }

                            }
                        });
                        deferred.resolve(subs);
                    }

                })
                .error(function(err) {
                    deferred.reject(err);
                    console.log(err);
                });

            return deferred.promise;
        },

        getOverEvo: function(i, overs) {
            var deferred = $q.defer();
            var self = this;
            var overs = overs || [];

            $http.get('/api/pokemon/' + i)
                .success(function(poke) {

                    if(poke.evolutions.length != 0) {
                        poke.evolutions.forEach(function(evo) {
                            var id = parseInt(evo.resource_uri.replace('/api/v1/pokemon/', ''));
                            overs.push({'id': id, 'name': evo.to.toLowerCase() });
                            self.getOverEvo(id, overs);
                        });
                        // console.log(overs);
                        deferred.resolve(overs);
                    }

                })
                .error(function(err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        },

        getMove: function(i) {
            return $http.get('/api/move/' + i).error(errorCallback);
        },

        getAbility: function(i) {
            return $http.get('/api/ability/' + i).error(errorCallback);
        },

        getType: function(i) {
            return $http.get('http://pokeapi.co/api/v1/type/' + i).error(errorCallback);
        }
    }

}]);

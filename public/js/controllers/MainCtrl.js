angular.module('MainCtrl', []).controller('MainController', function($scope) {

    $scope.tagline = "To the moon and back";

    $scope.Pokemons = [
      {
        'id':001,
        'name':'Bulbasaur',
        'type': ['grass', 'poison']
      },{
        'id':002,
        'name':'Ivysaur',
        'type': ['grass', 'poison']
      },{
        'id':003,
        'name':'Venusaur',
        'type': ['grass', 'poison']
      },{
        'id':004,
        'name':'Charmander',
        'type': ['fire']
      },{
        'id':005,
        'name':'Charmeleon',
        'type': ['fire']
      },{
        'id':006,
        'name':'Charizard',
        'type': ['fire','flying']
      },{
        'id':007,
        'name':'Squirtle',
        'type': ['water']
      },{
        'id':008,
        'name':'Wartortle',
        'type': ['water']
      },{
        'id':009,
        'name':'Blastoise',
        'type': ['water']
      }
    ]

    
});

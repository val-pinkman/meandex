var http = require('http');
var request = require('request');

var baseUrl = 'http://pokeapi.co/api/v1/';
var options = {cat: "pokemon", id: 1};

var Pokedex = function() {

    if (!(this instanceof Pokedex)) {
        return new Pokedex();
    }
};

module.exports = Pokedex;

Pokedex.prototype.get = function(opts, callback) {
    opts = opts || options;
    var url = baseUrl + opts.cat + '/' + opts.id;
    console.log(url);

    request.get(url, callback);
}

// grab the pokemon model
var Pokemon = require('./models/pokemon');
var dex = require('node-pokeapi')();

module.exports = function(app) {

    // Serveur routes ==========================================================
    // handle things like api calls
    // authentication routes

    // get all pokemons for index page
    app.get('/api/pokemons', function(req, res) {

        Pokemon.find(function(err, pokemons) {
            if(err)
                res.send(err);

            res.json(pokemons);
        });
    });

    // get a pokemon based on its national pokedex ID
    app.get('/api/pokemon/:id', function(req, res) {
        var pokemon = dex.get({cat: 'pokemon', id: req.params.id }, function(err, response, pokemon) {
            res.json(pokemon);
        });
    });

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load public/index.html file
    });
};

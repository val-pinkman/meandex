// grab the pokemon model
var Pokemon = require('./models/pokemon');
var PokeList = require('./models/pokemonlist.js');
var PokeType = require('./models/pokemonlist.js');
var PokeMove = require('./models/pokemove.js');

module.exports = function(app) {

    // Serveur routes ==========================================================
    // handle things like api calls
    // authentication routes

    // get all pokemons for index page
    app.get('/api/pokemons', function(req, res) {

        PokeList.find().sort('id').exec(function(err, pokemons) {
            if(err)
                res.send(err);

            res.json(pokemons);
        });
    });

    // get a pokemon based on its national pokedex ID
    app.get('/api/pokemon/:id', function(req, res) {

        Pokemon.findOne({ "id": req.params.id}, function(err, pokemon) {
            if(err)
                res.send(err);

            console.log(pokemon);
            res.json(pokemon);
        });
    });

    // get a pokemon move by its id
    app.get('/api/move/:id', function(req, res) {

        PokeMove.findOne({ id: req.params.id}, function(err, move) {
            if(err)
                res.send(err);

            res.json(move);
        });
    });

    // get a pokemon move by its id
    app.get('/api/type/:id', function(req, res) {

        PokeType.findOne({ id: req.params.id}, function(err, move) {
            if(err)
                res.send(err);

            res.json(move);
        });
    });

    // get a pokemon abilty by its id
    app.get('/api/abilty/:id', function(req, res) {

    });

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load public/index.html file
    });
};

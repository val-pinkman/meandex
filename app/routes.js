// grab the pokemon model
var Pokemon = require('./models/pokemon');
var PokeList = require('./models/pokemonlist.js');
var PokeType = require('./models/poketype.js');
var PokeMove = require('./models/pokemove.js');
var PokeAbility = require('./models/pokeability.js');

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

        PokeMove.findOne({ "id": req.params.id}, function(err, move) {
            if(err)
                res.send(err);

            res.json(move);
        });
    });

    // get a pokemon move by its id
    app.get('/api/type/:id', function(req, res) {

        PokeType.findOne({ "id": req.params.id}, function(err, type) {
            if(err)
                res.send(err);

            res.json(type);
        });
    });

    // get all pokemon types
    app.get('/api/types', function(req, res) {

        PokeType.find().sort('id').exec(function(err, types) {
            if(err)
                res.send(err);

            res.json(types);
        });
    });

    // get a pokemon abilty by its id
    app.get('/api/ability/:id', function(req, res) {
        PokeAbility.findOne({ "id": req.params.id }, function(err, ability) {
            if(err)
                res.send(err);

            res.json(ability);
        });
    });

    // get all pokemons abilities
    app.get('/api/abilities', function(req, res) {
        PokeAbility.find().sort('id').exec(function(err, abilities) {
            if(err)
                res.send(err);

            res.json(abilities);
        });
    });

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load public/index.html file
    });
};

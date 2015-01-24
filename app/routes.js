// grab the pokemon model
var Pokemon = require('./models/pokemon');

module.exports = function(app) {

    // Serveur routes ==========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/pokemon/:id', function(req, res) {

        Pokemon.find(function(err, pokemos) {

            if(err)
                res.send(err);

            res.json(pokemons);
        });
    });

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load public/index.html file
    });
};

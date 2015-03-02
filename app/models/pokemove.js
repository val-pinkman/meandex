// modules ========================
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PokeMoveSchema = new Schema({
    id: Number,
    accuracy: Number,
    category: String,
    description: String,
    name: String,
    power: Number,
    pp: Number
});

// define our pokemon model
// module.exports allows us to pass this to the other files  when it is called

module.exports = mongoose.model('PokeMove', PokeMoveSchema);

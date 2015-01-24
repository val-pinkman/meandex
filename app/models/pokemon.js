// modules ========================
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PokeSchema = new Schema({
    name: String,
    id: Number,
    types: []
});

// define our pokemon model
// module.exports allows us to pass this to the other files  when it is called

module.exports = mongoose.model('Pokemon', PokeSchema);

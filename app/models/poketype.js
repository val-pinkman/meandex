// modules ========================
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PokeTypeSchema = new Schema({
    id: Number,
    name: String,
    ineffective: [{name: String, id: Number}],
    no_effect: [{name: String, id: Number}],
    resistance: [{name: String, id: Number}],
    super_effective: [{name: String, id: Number}],
    weakness: [{name: String, id: Number}]
});

// define our pokemon model
// module.exports allows us to pass this to the other files  when it is called

module.exports = mongoose.model('PokeType', PokeTypeSchema);

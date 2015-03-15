// modules ========================
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PokeAbilitySchema = new Schema({
    id: Number,
    description: String,
    name: String
});

// define our pokemon model
// module.exports allows us to pass this to the other files  when it is called

module.exports =  mongoose.model('PokeAbility', PokeAbilitySchema);

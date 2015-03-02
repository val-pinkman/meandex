// modules ========================
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PokeSchema = new Schema({
    name: String,
    id: Number,
    types: [{name: String}],
    abilities: [{name: String}],
    attack: Number,
    catch_rate: Number,
    defense: Number,
    descriptions: [{name: String, resource_uri: String}],
    egg_cycles: Number,
    egg_groups: [{name: String, resource_uri: String}],
    ev_yield: String,
    evolutions: [],
    exp: Number,
    growth_rate: String,
    happiness: Number,
    height: String,
    hp: Number,
    male_female_ratio: String,
    moves: [],
    sp_atk: Number,
    sp_def: Number,
    species: String,
    speed: Number,
    total: Number,
    weight: String
});

// define our pokemon model
// module.exports allows us to pass this to the other files  when it is called

module.exports = mongoose.model('Pokemon', PokeSchema);

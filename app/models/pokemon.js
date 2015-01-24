// modules ========================
var mongoose = require('mongoose');

// define our pokemon model
// module.exports allows us to pass this to the other files  when it is called
module.exports = mongoose.model('Pokemon', {
    name : {type : String, default: ''}
});

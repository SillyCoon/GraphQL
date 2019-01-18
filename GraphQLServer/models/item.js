var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});

var Model = mongoose.model('Items', itemSchema);
module.exports = Model;
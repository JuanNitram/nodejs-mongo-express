var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    medias: {
        original: [],
        normal: [],
        large: []
    },
});
  
var Product = mongoose.model('products', ProductSchema);

module.exports = Product
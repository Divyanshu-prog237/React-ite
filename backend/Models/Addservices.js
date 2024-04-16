
const {Schema, model} = require('../connection')
const userSchema = new Schema({
    productname: String,
    description: String,
    price: Number,
    imageurl: String
    

});
module.exports = model('Addservices', userSchema)

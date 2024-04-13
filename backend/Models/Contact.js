
const {Schema, model} = require('../connection')
const userSchema = new Schema({
    fullname: String,
    emailadd: String,
    phnumber: String,
    message: String
    

});
module.exports = model('user', userSchema)


const {Schema, model} = require('../connection')
const userSchema = new Schema({
    fname: String,
    lname: String,
    email: String,
    password: String,
    role: {type:String, default: "user"},
    avatar: {type:String, default: "avatar_placeholder.png"},
    createdAt: Date
    

});
module.exports = model('user', userSchema)

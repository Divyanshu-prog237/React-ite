const mongoose = require('mongoose');
const url = "mongodb+srv://chaurasiadivyanshu6:divyanshu123@cluster0.5qkvjuf.mongodb.net/BusinessIncubators?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url)

.then((result) => {
    console.log('Connected to the database')
}).catch((err) => {
    console.log(err)
});
module.exports = mongoose;
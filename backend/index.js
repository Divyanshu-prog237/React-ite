const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')

const UserRouter = require('./Routers/User')
const ServiceRouter = require('./Routers/Services')
const UtilRouter = require('./Routers/Utils')

app.use(cors({
    origin: ['http://localhost:5173'],
}))

// middleware
app.use(express.json());

app.use('/user', UserRouter)
app.use('/services', ServiceRouter)
app.use('/util', UtilRouter);

app.use(express.static('./Uploads'));


app.listen(port, () => {
    console.log('Server is running at the port 3000')
})
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')

const UserRouter = require('./Routers/User')
const ServiceRouter = require('./Routers/Services')

app.use(cors({
    origin: ['http://localhost:5173'],
}))

// middleware
app.use(express.json());

app.use('/user', UserRouter)
app.use('/services', ServiceRouter)


app.listen(port, () => {
    console.log('Server is running at the port 3000')
})
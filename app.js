const connectDB= require('./db/connect')
require('dotenv').config()
const express = require('express');
const app = express();
const port = 5000;
const tasks = require('./routes/tasks')
app.use(express.json());
app.use(express.static('./public'))
app.use(express.urlencoded({extended : false}))

app.use('/api/v1/tasks', tasks)

const start= async ()=> {
    try {
        await connectDB (process.env.MONGO_URI)
        app.listen(port, (req, res) => {
            console.log(`app is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
        
    }
}

start()

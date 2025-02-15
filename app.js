const connectDB= require('./db/connect')
require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const tasks = require('./routes/tasks')
const notFound = require('./middleware/not_found')
const errorHandlerMiddleware = require('./middleware/error_handler')

app.use(express.json());
app.use(express.static('./public'))
app.use(express.urlencoded({extended : false}))

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const start= async ()=> {
    try {
        await connectDB (process.env.MONGO_URI)
        app.listen(port, console.log(`app is listening on port ${port}...`)
        )
    } catch (error) {
        console.log(error)
        
    }
}

start()

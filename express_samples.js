const express = require('express');
const app = express();
const path = require('path')
// const {logger} = require('./middlewares');
const people = require('./routes/people')
const auth = require('./routes/auth')
const port = 5000;

// app.use(express.static('./public'));
app.use(express.json())
app.use('/api/people', people)
app.use('/login', auth)
// app.use('/api', logger)
// load static files
app.use(express.static('./public'))
// parse form data
app.use(express.urlencoded({ extended : false}))
// parse json

app.get('/', (req, res) => {
    res.status(200).send('<h1>Home page</h1> <a href= "/api/products"> Products </a>')
});




// app.all('*', (req, res) => {
//     console.log('resource not found')
//     res.status(404).send('Resource not found')
// })

app.listen(port, (req, res) => {
    console.log(`App is listening on port ${port}`)
});
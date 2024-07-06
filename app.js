const express = require('express');
const path = require('path');
const app = express();

port = 5000

app.get('/', (req, res) => {
    console.log('user hit the resource')
    res.status(200).sendFile(path.resolve(__dirname, './public/index.html'))
})

app.listen(port, (req, res) => {
    console.log(`App is listening on port ${port}`)
 

})
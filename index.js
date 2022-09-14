const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const port = 3000;


app.use(bodyParser.json())

app.get('/teste', (req, res) => {
    res.status(200).send('hello there')
})

app.listen(port, console.log(`Running on port ${port}`))

module.exports = app
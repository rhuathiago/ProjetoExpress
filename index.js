const express = require('express')
const app = express()
const port = 5000

const path = require('path')

const users = require('./users')

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

app.use(express.static('public'))

const basePath = path.join(__dirname, 'templates')

app.use('/users', users)

app.listen(port, () => {
    console.log(`O server está rodando na porta ${port}`)
})
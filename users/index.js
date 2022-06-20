const express = require('express')
const router = express.Router()
const path = require('path')

router.use(express.json())

const basePath = path.join(__dirname, '../templates')



router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})

router.post('/save', (req, res) => {

    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuário é ${name} e a sua idade é ${age} anos`)

    res.sendFile(`${basePath}/userform.html`)
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    
    console.log(`Procurando o usuário: ${id}`)
    
    res.sendFile(`${basePath}/users.html`)
})

router.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

router.use(function (req, res, next){
    res.status(404). sendFile(`${basePath}/404.html`)
})

module.exports = router
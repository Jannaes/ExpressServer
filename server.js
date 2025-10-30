// Express.js palvelin-tiedosto//

const path = require('path')
const express = require('express')

const app = express()

// JSON-tiedoston lukeminen
const herkut = require('./herkut.json')

// GET ALL etsitään kaikki herkut jsonista
app.get('/api/herkut', (req, res) => {  //request ja response
    res.json(herkut)
})

// Tehdään polkumääritys public kansioon (staattiset tiedostot)
const polku = path.join(__dirname, './public')  //(ensimmäinen parametri viittaa mihin liitetään ja toinen mitä liitetään)

// Sanotaan että em. polussa on tiedostosisältö jota palvelin käyttää kun se saa http request
app.use(express.static(polku))

app.listen(3000, () => {
    console.log('Server is up on post 3000.')
})
// Express.js palvelin-tiedosto//

const express = require('express')
const path = require('path')
const fs = require('fs').promises
const app = express()

// JSON-tiedoston lukeminen
const herkut = require('./herkut.json')

// GET ALL etsitään kaikki herkut jsonista
app.get('/api/herkut', (req, res) => {  //request ja response
    res.json(herkut)
})


//Pinkoodin lukeminen txt tiedostosta palvelimelta ja lähettäminen selaimelle
app.get('/api/getpin', async (req, res) => {
    try {
        //Luetaan tekstitiedoston sisältö
    const savedPin = await fs.readFile('./pin.txt', 'utf-8')

    //lähetetään tiedoston sisältö vastauksena
    res.send(savedPin)
    } catch (error) {
        console.error('Error reading file:', error)
        res.status(500).send('Internal Server Error')
    }
})


// Tehdään polkumääritys public kansioon (staattiset tiedostot)
const polku = path.join(__dirname, './public')  //(ensimmäinen parametri viittaa mihin liitetään ja toinen mitä liitetään)

// Sanotaan että em. polussa on tiedostosisältö jota palvelin käyttää kun se saa http request
app.use(express.static(polku))

app.listen(3000, () => {
    console.log('Server is up on post 3000.')
})
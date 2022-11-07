const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

///////////// Get Method /// 
app.get('/user', (req, res) => {
    const user = [
        {
            name: 'Showkat Sumon',
            address: {
                district: "Kurigram",
                division: 'Rangpur'
            }
        },
        {
            name: 'Sumon Ahmed',
            address: {
                district: "Lalmonirhat",
                division: 'Rangpur'
            }
        }
    ]

    res.send(user);
})

app.get('/user/:id', (req, res) => {

    const user = [
        {
            name: 'Showkat Sumon',
            address: {
                district: "Kurigram",
                division: 'Rangpur'
            }
        },
        {
            name: 'Sumon Ahmed',
            address: {
                district: "Lalmonirhat",
                division: 'Rangpur'
            }
        }
    ]

    const userId = req.params.id;
    res.send(user[userId])
})

////////// Post method
app.post('/addUser', (req, res) => {
    const user = req.body;
    user.id = 4;
    res.send(user)
})

app.listen(3000, () => console.log('Code is running'));
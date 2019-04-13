const express = require("express")
const users = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")

const User = require("../UserProfile")
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        user_name: req.body.user_name,
        user_password: req.body.user_password
    }

    User.findOne({
        where: {
            user_name: req.body.user_name
        }
    })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.user_password, 10, (err, hash) => {
                    userData.user_password = hash
                    User.create(userData)
                        .then(user => {
                            res.json({ status: user.user_name + ' registered' })
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            } else {
                res.json({ error: "User already exists" })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

users.post('/login', (req, res) => {
    User.findOne({
        where: {
            user_name: req.body.user_name
        }
    })
        .then(user => {
            if (user) {
                if (req.body.user_password === user.user_password) {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token)
                }
            } else {
                res.status(400).json({ error: 'User does not exist' })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})

module.exports = users

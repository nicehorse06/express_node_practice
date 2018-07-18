const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// body-parser is used as a middleware to handle data in a more elegant way.
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const User = require('./User');

// CREATES A NEW USER
router.post('/', (req, res) => {
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    },(err, user) => {
        // callback function response an error value and a success value.
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        console.log(user)
        res.status(200).send(user);
    })
})

router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        if (err) return res.status(500).send("There was a problem finding the users.");
        console.log(users)
        res.status(200).send(users);
    })
})

module.exports = router;
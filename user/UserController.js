const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// body-parser is used as a middleware to handle data in a more elegant way.
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const User = require('./User');

// CREATES A NEW USER
router.post('/', (req, res) => {
    // post request body 的資料存在 req.body
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    },(err, user) => {
        // callback function response an error value and a success value.
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send(user);
    })
})

router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    })
})

// 範例 http://localhost:3000/users/5b4ed1cffb797f09332bb75a
router.get('/:id', (req, res) => {
    // get request params 的資料存在 req.params
    User.findById(req.params.id, (err, user) => {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user)
    })
})

router.delete('/:id', (req, res) => {
    // 刪除後回傳該刪除的值
    User.findByIdAndRemove(req.params.id, (err, user) => {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User "+ user.name +" was deleted.");
    })
})

router.put('/:id', (req, res) => {
    //req.body帶有應該被更新的參數, {new: true}代表回傳的user資料是更新後的
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, user) => {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    })
})

module.exports = router;
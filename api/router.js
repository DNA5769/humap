const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const validator = require("email-syntax-validator");
const md5 = require('md5');
require('dotenv').config();

const User = require('./models/user');

const router = express.Router();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'api.html'));
});

router.post('/create-user', (req, res) => {
    if ('name' in req.body && 'email' in req.body && 'password' in req.body)
    {
        if (req.body.name.trim() === '')
        {
            res.status(401).json({
                error: "Please enter a valid username"
            });
        }
        else if (req.body.email.trim() === '' || !validator.validate(req.body.email.trim()))
        {
            res.status(401).json({
                error: "Please enter a valid email"
            });
        }
        else if (req.body.password === '')
        {
            res.status(401).json({
                error: "Please enter a password"
            });
        }
        else
        {
            let user = new User({
                _id: new mongoose.Types.ObjectId(),
                name: req.body.name.trim(),
                email: req.body.email.trim(),
                password: req.body.password,
                avatar: `https://www.gravatar.com/avatar/${md5(req.body.email.trim())}`
            });

            user.save()
            .then(result => {
                res.status(200).json({
                    message: "User added sucessfully"
                });
            })
            .catch(err => {
                res.status(401).json({
                    error: err
                });
            });
        }
    }
    else
    {
        res.status(401).json({
            error: "Body should contain name, email and password!"
        });
    }
});

router.post('/login-user', (req, res) => {
    if ('email' in req.body && 'password' in req.body)
    {
        if (req.body.email.trim() === '' || !validator.validate(req.body.email.trim()))
        {
            res.status(401).json({
                error: "Please enter a valid email"
            });
        }
        else if (req.body.password === '')
        {
            res.status(401).json({
                error: "Please enter a password"
            });
        }
        else
        {
            User.find().where({ email: req.body.email.trim() }).exec()
            .then(result => {
                if (result.length === 0)
                {
                    res.status(401).json({
                        error: "Account with this email doesn't exist. Please sign up first"
                    });
                }
                else
                {
                    if (result[0].password === req.body.password)
                    {
                        res.status(200).json({
                            userID: result[0]._id,
                            name: result[0].name,
                            email: result[0].email,
                            password: result[0].password,
                            avatar: result[0].avatar
                        });
                    }
                    else
                    {
                        res.status(401).json({
                            error: "Incorrect password"
                        });
                    }
                }
            })
            .catch(err => {
                res.status(401).json({
                    error: err
                });
            });
        }
    }
    else
    {
        res.status(401).json({
            error: "Body should contain email and password!"
        });
    }
});

module.exports = router;
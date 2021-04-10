const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const validator = require("email-syntax-validator");
const md5 = require('md5');
require('dotenv').config();

const User = require('./models/user');
const Post = require('./models/post');

const router = express.Router();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Returns distance between (lat1, lon1) and (lat2, lon2) in kms
function distance(lat1, lon1, lat2, lon2)
{
    let p = Math.PI/180;
    let a = 0.5 - Math.cos((lat2-lat1)*p)/2 + Math.cos(lat1*p) * Math.cos(lat2*p) * (1-Math.cos((lon2-lon1)*p))/2;
    return 12742 * Math.asin(Math.sqrt(a));
}

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'api.html'));
});

router.post('/create-user', (req, res) => {
    if ('name' in req.body && 'email' in req.body && 'password' in req.body)
    {
        if (req.body.name.trim() === '')
        {
            console.log('/create-user', { error: "Please enter a valid username" });
            res.status(401).json({
                error: "Please enter a valid username"
            });
        }
        else if (req.body.email.trim() === '' || !validator.validate(req.body.email.trim()))
        {
            console.log('/create-user', { error: "Please enter a valid email" });
            res.status(401).json({
                error: "Please enter a valid email"
            });
        }
        else if (req.body.password === '')
        {
            console.log('/create-user', { error: "Please enter a password" });
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
                console.log('/create-user', { message: "User added sucessfully" });
                res.status(200).json({
                    message: "User added sucessfully"
                });
            })
            .catch(err => {
                console.log('/create-user', { error: err });
                res.status(401).json({
                    error: err
                });
            });
        }
    }
    else
    {
        console.log('/create-user', {  error: "Body should contain name, email and password!" });
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
            console.log('/login-user', {  error: "Please enter a valid email" });
            res.status(401).json({
                error: "Please enter a valid email"
            });
        }
        else if (req.body.password === '')
        {
            console.log('/login-user', {  error: "Please enter a password" });
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
                    console.log('/login-user', {  error: "Account with this email doesn't exist. Please sign up first" });
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
                        console.log('/login-user', { error: "Incorrect password" });
                        res.status(401).json({
                            error: "Incorrect password"
                        });
                    }
                }
            })
            .catch(err => {
                console.log('/login-user', { error: err });
                res.status(401).json({
                    error: err
                });
            });
        }
    }
    else
    {
        console.log('/login-user', { error: "Body should contain email and password!" });
        res.status(401).json({
            error: "Body should contain email and password!"
        });
    }
});

router.post('/create-post', (req, res) => {
    if ('userID' in req.body && 'latitude' in req.body && 'longitude' in req.body &&
        'title' in req.body && 'content' in req.body && 'tag' in req.body && 'isAnonymous' in req.body)
    {
        if (req.body.title.trim() === '')
        {
            console.log('/create-post', { error: "Please enter a title" });
            res.status(401).json({
                error: "Please enter a title"
            });
        }
        else if (req.body.content.trim() === '')
        {
            console.log('/create-post', { error: "Please enter content" });
            res.status(401).json({
                error: "Please enter content"
            });
        }
        else
        {
            User.find().where({ _id: req.body.userID })
            .then(result => {
                if (result.length == 0)
                {
                    console.log('/create-post', { error: "Invalid userID" });
                    res.status(401).json({
                        error: "Invalid userID"
                    });
                }
                else
                {
                    let post = new Post({
                        _id: new mongoose.Types.ObjectId(),
                        userID: req.body.userID,
                        latitude: req.body.latitude,
                        longitude: req.body.longitude,
                        author: result[0].name,
                        avatar: result[0].avatar,
                        title: req.body.title,
                        content: req.body.content,
                        comments: [],
                        tag: req.body.tag,
                        isAnonymous: req.body.isAnonymous
                    });
        
                    post.save()
                    .then(result => {
                        console.log('/create-post', { message: "Post added sucessfully" });
                        res.status(200).json({
                            message: "Post added sucessfully"
                        });
                    })
                    .catch(err => {
                        console.log('/create-post', { error: err });
                        res.status(401).json({
                            error: err
                        });
                    });
                }
            })
            .catch(err => {
                console.log('/create-post', { error: err });
                res.status(401).json({
                    error: err
                });
            });
        }
    }
    else
    {
        console.log('/create-post', { error: "Body should contain userID, latitude, longitude, title, content, tag and isAnonymous!" });
        res.status(401).json({
            error: "Body should contain userID, latitude, longitude, title, content, tag and isAnonymous!"
        });
    }
});

router.post('/get-posts', (req, res) => {
    if ('latitude' in req.body && 'longitude' in req.body && 'tag' in req.body)
    {
        if (typeof req.query.limit === 'undefined')
        {
            console.log('/get-posts', { error: "Please specify limit" });
            res.status(401).json({
                error: "Please specify limit"
            });
        }
        else
        {

            let page = Math.max(1, parseInt(req.query.page)), limit = parseInt(req.query.limit);
            Post.find()
            .then(results => {
                res.status(200).json(results
                    .filter(result => (req.body.tag == "All" || req.body.tag == result.tag) && distance(result.latitude, result.longitude, req.body.latitude, req.body.longitude) <= 2)
                    .map(result => {
                        const clone = JSON.parse(JSON.stringify(result));
    
                        clone.postID = clone._id;
                        delete clone._id;
                        delete clone.__v;
                        delete clone.updatedAt;
    
                        return clone;
                    }).slice((page-1)*limit, (page-1)*limit+limit));
            })
            .catch(err => {
                console.log('/get-posts', { error: err });
                res.status(401).json({
                    error: err
                });
            });
        }
    }
    else
    {
        console.log('/get-posts', { error: "Body should contain latitude, longitude and tag" });
        res.status(401).json({
            error: "Body should contain latitude, longitude and tag"
        });
    }
});

router.post('/get-posts-length', (req, res) => {
    if ('latitude' in req.body && 'longitude' in req.body && 'tag' in req.body)
    {
        Post.find()
        .then(results => {
            res.status(200).json({ length: results.filter(result => (req.body.tag == "All" || req.body.tag == result.tag) && distance(result.latitude, result.longitude, req.body.latitude, req.body.longitude) <= 2).length });
        })
        .catch(err => {
            console.log('/get-posts-length', { error: err });
            res.status(401).json({
                error: err
            });
        });
    }
    else
    {
        console.log('/get-posts-length', { error: "Body should contain latitude, longitude and tag" });
        res.status(401).json({
            error: "Body should contain latitude, longitude and tag"
        });
    }
});

router.post('/create-comment', (req, res) => {
    if ('userID' in req.body && 'postID' in req.body && 'content' in req.body)
    {
        if (req.body.content.trim() === '')
        {
            console.log('/create-comment', { error: "Please enter comment" });
            res.status(401).json({
                error: "Please enter comment"
            });
        }
        else
        {
            User.find().where({ _id: req.body.userID })
            .then(result => {
                if (result.length == 0)
                {
                    console.log('/create-comment', { error: "Invalid userID" });
                    res.status(401).json({
                        error: "Invalid userID"
                    });
                }
                else
                {
                    Post.findOneAndUpdate({ _id: req.body.postID }, { $push: { comments: {
                        _id: new mongoose.Types.ObjectId(),
                        userID: req.body.userID,
                        author: result[0].name,
                        avatar: result[0].avatar,
                        content: req.body.content
                    }}}).exec().then(result => {
                        console.log('/create-comment', { message: "Comment added sucessfully" });
                        res.status(200).json({
                            message: "Comment added sucessfully"
                        });
                    }).catch(err => {
                        console.log('/create-comment', { error: err });
                        res.status(401).json({
                            error: err
                        });
                    });
                }
            })
            .catch(err => {
                console.log('/create-comment', { error: err });
                res.status(401).json({
                    error: err
                });
            })
        }
    }
    else
    {
        console.log('/create-comment', { error: "Body should contain userID, postID and content!" });
        res.status(401).json({
            error: "Body should contain userID, postID and content!"
        });
    }
});

module.exports = router;
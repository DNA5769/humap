const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const router = express.Router();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'api.html'));
});

module.exports = router;
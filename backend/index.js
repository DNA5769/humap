const path = require('path');
const express = require('express');
const cors = require('cors');

const apiRoutes = require('./api/router');

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.redirect('/api');
});

// Middleware
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.get('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'img', '404.jpg'));
});

app.listen(port, () => console.log(`[SERVER] Started`));
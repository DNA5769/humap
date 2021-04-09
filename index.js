const express = require('express');

const apiRoutes = require('./api/router');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.redirect('/api');
});

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.listen(port, () => console.log(`[SERVER] Started`));
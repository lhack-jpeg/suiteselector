const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const expressError = require('./Utilities/ExpressError');
const wrapAsync = require('./utilities/wrapAsync');
const ejsMate = require('ejs-mate');
const Toilets = require('./models/toilets');

const app = express();
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/Toilet', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

app.get('/', (req, res) => {
    res.render('home');
});

app.get(
    '/show',
    wrapAsync(async (req, res) => {
        const toilets = await Toilets.find({});
        res.render('/toilet/showAll', { toilets });
    })
);

app.post('/', (req, res) => {
    res.send(req.body);
});

app.all('*', (res, req, next) => {
    next(new expressError('Page not found', 404));
});

app.use((err, req, res, next) => {
    const { status = 500 } = err;
    if (!err.message) err.message = 'Something went wrong';
    res.status(status).render('error', { err });
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

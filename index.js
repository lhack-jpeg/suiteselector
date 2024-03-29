if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
// imports
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const expressError = require('./utilities/expressError');
const ejsMate = require('ejs-mate');
const mongoSanitize = require('express-mongo-sanitize');
const basicRoutes = require('./routes/basicRoutes');
// app settings
const app = express();
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(mongoSanitize());

// DB connections
const dbURL = process.env.DBURL || 'mongodb://localhost:27017/Toilet';

mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

// app routing
app.use('/', basicRoutes);

app.get('/', (req, res) => {
    res.render('home');
});

app.all('*', (res, req, next) => {
    next(new expressError('Page not found', 404));
});

app.use((err, req, res, next) => {
    const { status = 500 } = err;
    if (!err.message) err.message = 'Something went wrong';
    res.status(status).render('error', { err });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

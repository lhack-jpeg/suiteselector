const mongoose = require('mongoose');
const Toilet = require('../models/toilets');
const toiletData = require('./toiletData');

mongoose.connect('mongodb://localhost:27017/Toilet', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

const seedDB = async () => {
    await Toilet.deleteMany();
    array.forEach((toiletData) => {
        const toilet = new Toilet({
            name: `toiletData.`,
        });
    });
};

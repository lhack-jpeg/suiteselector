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
    for (const toilet of toiletData) {
        const newToilet = new Toilet({
            name: toilet.productName,
            code: toilet.productCode,
            url: toilet.pageUrl,
            image: toilet.image,
            spec: toilet.specSheet,
            PTrapSetout: parseInt(toilet.PTrapSetout) || null,
            STrapSetout: parseInt(toilet.STrapSetout) || null,
            STrapMin: parseInt(toilet.STrapMin) || null,
            STrapMax: parseInt(toilet.STrapMax) || null,
            inletType: toilet.inletType,
            waterPointHeight: parseInt(toilet.WaterPointHeight) || null,
            waterPointOffset: parseInt(toilet.WaterPointOffset) || null,
        });
        await newToilet.save();
    }
};

seedDB().then(() => {
    mongoose.connection.close();
});

// Query for finding wastes that fit out a measurement
// db.toilets.find({$and:[{STrapMin:{$lte:VALUE}},{STrapMax:{$gte:VALUE}}]})

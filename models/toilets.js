const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToiletSchema = new Schema({
    name: String,
    code: String,
    image: String,
    url: String,
    spec: String,
    PTrapSetout: Number,
    STrapSetout: Number,
    STrapMin: Number,
    STrapMax: Number,
    bottomInlet: Boolean,
    backInlet: Boolean,
    waterPointHeight: Number,
    waterPointOffset: Number,
});

module.exports = mongoose.model('Toilet', ToiletSchema);

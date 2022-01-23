const Toilets = require('../models/toilets');

module.exports.home = (req, res) => {
    res.render('home');
};

module.exports.search = async (req, res) => {
    console.log(req.body);
    const { waste, outlet } = req.body;
    if (waste === 'STrap') {
        const toilets = await Toilets.find({
            $or: [
                { STrapSetout: outlet },
                {
                    $and: [
                        { STrapMin: { $lte: outlet } },
                        { STrapMax: { $gte: outlet } },
                    ],
                },
            ],
        });
        res.render('toilet/show', { toilets });
    } else {
        const toilets = await Toilets.find({ PTrapSetout: { $eq: outlet } });
        res.render('toilet/show', { toilets });
    }
};

module.exports.show = async (req, res) => {
    const toilets = await Toilets.find({});
    res.render('toilet/index', { toilets });
};

module.exports.showOne = async (req, res) => {
    const { code } = req.params;
    console.log(code);
    const toilet = await Toilets.findOne({ code: code });
    console.log(toilet);
    res.render('toilet/showOne', { toilet });
};

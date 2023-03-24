const Toilets = require("../models/toilets");

function distanceCalc(a, b, x, y) {
    let distance = Math.floor(((a - x) ** 2 + (b - y) ** 2) ** 0.5);
    return distance;
}

module.exports.home = (req, res) => {
    console.log("home");
    res.send("home");
};

// filter toilets
module.exports.search = async (req, res) => {
    console.log(req.body);
    const { waste, outlet, inletType, inletHeight, inletOffset } = req.body;
    if (inletType === "backInlet") {
        if (waste === "STrap") {
            const toiletData = await Toilets.find({
                $and: [
                    {
                        $or: [
                            { STrapSetout: outlet },
                            {
                                $and: [
                                    { STrapMin: { $lte: outlet } },
                                    { STrapMax: { $gte: outlet } },
                                ],
                            },
                        ],
                    },
                    { inletType: inletType },
                ],
            });
            let toilets = toiletData;
            for (let i = 0; i < toilets.length; i++) {
                toilets[i].inletDistance = 0;
                toilets[i].inletDistance = distanceCalc(
                    toilets[i].waterPointHeight,
                    toilets[i].waterPointOffset,
                    inletHeight,
                    inletOffset
                );
            }
            res.send(toilets);
        } else {
            const toiletData = await Toilets.find({
                $and: [
                    { PTrapSetout: { $eq: outlet } },
                    { inletType: inletType },
                ],
            });
            let toilets = toiletData;
            for (let i = 0; i < toilets.length; i++) {
                toilets[i].inletDistance = 0;
                toilets[i].inletDistance = distanceCalc(
                    toilets[i].waterPointHeight,
                    toilets[i].waterPointOffset,
                    inletHeight,
                    inletOffset
                );
            }
            res.send(toilets);
        }
    } else {
        if (waste === "STrap") {
            const toilets = await Toilets.find({
                $and: [
                    {
                        $or: [
                            { STrapSetout: outlet },
                            {
                                $and: [
                                    { STrapMin: { $lte: outlet } },
                                    { STrapMax: { $gte: outlet } },
                                ],
                            },
                        ],
                    },
                    { inletType: inletType },
                ],
            });
            res.send(toilets);
        } else {
            const toilets = await Toilets.find({
                $and: [
                    { PTrapSetout: { $eq: outlet } },
                    { inletType: inletType },
                ],
            });
            res.send(toilets);
        }
    }
};

// show all toilets
module.exports.show = async (req, res) => {
    console.log("Inside show");
    const toilets = await Toilets.find({});
    res.send({ toilets });
};

// show one toilet function
module.exports.showOne = async (req, res) => {
    const { code } = req.params;
    console.log(code);
    const toilet = await Toilets.findOne({ code: code });
    console.log(toilet);
    res.send(toilet);
};

// Show certain inlets
module.exports.showInlet = async (req, res) => {
    const { inletType } = req.params;
    console.log(inletType);
    const toilets = await Toilets.find({ inletType: inletType });
    res.send(toilets);
};

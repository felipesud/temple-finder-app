const {Temple: TempleModel } = require("../models/Temple");

const templeController = {

    create: async(req, res) => {
        try {
            const temple = {
                name: req.body.name,
                address:req.body.address,
                telephone: req.body.telephone,
                photoUrl: req.body.photoUrl
            };

            const response = await TempleModel.create(temple);
            res.status(201).json({response, msg: "Temple added Successfully!"})

        }catch (error){
            console.log(error);
        }
    },
    getAll: async (req, res) => {
        try {
            const temples = await TempleModel.find();

            res.json(temples);
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = templeController;
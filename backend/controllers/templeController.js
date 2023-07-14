const {Temple: TempleModel } = require("../models/Temple");

const templeController = {

    create: async(req, res) => {
        try {
            const temple = {
                name: req.body.name,
                address:req.body.address,
                telephone: req.body.telephone,
                photoUrl: req.body.photoUrl,
            };

            const response = await TempleModel.create(temple);
            res.status(201).json({response, msg: "Temple added Successfully."})

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
    },

    get: async(req, res) => {
        try {
            const id = req.params.id;
            const temple = await TempleModel.findById(id);

            if(!temple){
                res.status(404).json({msg: "Temple not found."})
            }

            res.json(temple);
        } catch (error) {
            console.log(error)
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id
            const temple = await TempleModel.findById(id)

            if(!temple){
                res.status(404).json({msg: "Temple not found."})
            }

            const deletedTemple = await TempleModel.findByIdAndDelete(id);
            res.status(200).json({deletedTemple, msg: "Temple deleted successfully."})


        } catch (error) {
            console.log(error);
        }
    },
    update: async(req, res) => {
        try {
            const id = req.params.id;

            const temple = {
                name: req.body.name,
                address:req.body.address,
                telephone: req.body.telephone,
                photoUrl: req.body.photoUrl,
            };
            const updatedTemple = await TempleModel.findByIdAndUpdate(id, temple);

            if(!updatedTemple){
                res.status(404).json({msg: "Temple not found."})
            }
            res.status(200).json({temple, msg: "Temple updated successfully."});
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = templeController;
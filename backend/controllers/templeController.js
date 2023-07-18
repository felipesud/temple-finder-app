const { Temple: TempleModel } = require("../models/Temple");
console.log(`Temple Model => ${TempleModel}`)
const templeController = {
    create: async (req, res) => {
        try {
            const temple = {
                name: req.body.name,
                address: req.body.address,
                telephone: req.body.telephone,
                photoUrl: req.body.photoUrl,
            };

            console.log("Temple object:", temple);

            const response = await TempleModel.create(temple);
            console.log("Created temple:", response);

            res.status(201).json({ response, msg: "Temple added successfully." });
        } catch (error) {
            console.log("Error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
    getAll: async (req, res) => {
        try {
            const temples = await TempleModel.find();
            console.log("Retrieved temples:", temples);

            res.json(temples);
        } catch (error) {
            console.log("Error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },

    get: async (req, res) => {
        try {
            const id = req.params.id;
            console.log("Requested temple id:", id);

            const temple = await TempleModel.findById(id);
            console.log("Retrieved temple:", temple);

            if (!temple) {
                res.status(404).json({ msg: "Temple not found." });
            }

            res.json(temple);
        } catch (error) {
            console.log("Error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            console.log("Requested temple id:", id);

            const temple = await TempleModel.findById(id);
            console.log("Retrieved temple:", temple);

            if (!temple) {
                res.status(404).json({ msg: "Temple not found." });
            }

            const deletedTemple = await TempleModel.findByIdAndDelete(id);
            console.log("Deleted temple:", deletedTemple);

            res.status(200).json({ deletedTemple, msg: "Temple deleted successfully." });
        } catch (error) {
            console.log("Error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id;
            console.log("Requested temple id:", id);

            const temple = {
                name: req.body.name,
                address: req.body.address,
                telephone: req.body.telephone,
                photoUrl: req.body.photoUrl,
            };
            console.log("Updated temple object:", temple);

            const updatedTemple = await TempleModel.findByIdAndUpdate(id, temple);
            console.log("Updated temple:", updatedTemple);

            if (!updatedTemple) {
                res.status(404).json({ msg: "Temple not found." });
            }

            res.status(200).json({ temple, msg: "Temple updated successfully." });
        } catch (error) {
            console.log("Error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
};

module.exports = templeController;

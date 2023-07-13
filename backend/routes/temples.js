
const router = require('express').Router();

const templeController = require("../controllers/templeController");


router.route("/temples").post((req, res) => templeController.create(req, res));
 

router.route("/temples").get((req, res) => templeController.getAll(req, res));


module.exports = router;

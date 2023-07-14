
const router = require('express').Router();

const templeController = require("../controllers/templeController");


router
.route("/temples")
.post((req, res) => templeController
.create(req, res));
 

router
.route("/temples")
.get((req, res) => templeController
.getAll(req, res));


router
.route("/temples/:id")
.get((req, res) => templeController
.get(req, res));


router
.route("/temples/:id")
.delete((req, res) => templeController
.delete(req, res));


router
.route("/temples/:id")
.put((req, res) => templeController
.update(req, res));




module.exports = router;

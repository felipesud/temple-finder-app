const router = require("express").Router();

//Temples Router
const templesRouter = require("./temples")

router.use("/", templesRouter)

module.exports = router;
const router = require("express").Router();

const templesRouter = require("./temples");

router.use("/", templesRouter);

module.exports = router;

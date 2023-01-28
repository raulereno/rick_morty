const characters = require("./characters.routes");
const router = require("express").Router();

router.use("/characters", characters);

module.exports = router;

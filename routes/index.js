const express = require("express");

var router = express.Router();

router.use("/main", require("./route"));

module.exports = router;
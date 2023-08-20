const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");
const bodyParser = require("body-parser");

// POST /api/users
router.post("/", usersCtrl.create);

module.exports = router;

const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");
const bodyParser = require("body-parser");

// POST /api/users
router.post("/", usersCtrl.create);
// GET /api/users/token/:clerkId
router.get("/token/:clerkId", usersCtrl.getToken);

module.exports = router;

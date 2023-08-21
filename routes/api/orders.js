const express = require("express");
const router = express.Router();
const ordersCtrl = require("../../controllers/api/orders");

// POST /api/orders
router.post("/create-payment-intent", ordersCtrl.intent);

module.exports = router;

const express = require("express");
const { getProducts, createCheckoutSession, handleWebhook } = require("../controllers/paymentController");
const router = express.Router();

// Route for retrieving products
router.get("/products", getProducts);

// Route for creating a checkout session
router.post("/create-checkout-session", createCheckoutSession);

// Webhook route
router.post("/webhook", express.raw({ type: "application/json" }), handleWebhook);

module.exports = router;

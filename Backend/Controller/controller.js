const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { Product } = require("../data/data");

// Get products from data
exports.getProducts = (req, res) => {
  res.json(Product);
};

// Create a checkout session
exports.createCheckoutSession = async (req, res) => {
  const { items } = req.body;
  console.log("items", items);

  const lineItems = items.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.name,
      },
      unit_amount: item.price,
    },
    quantity: item.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
};

// Handle Stripe webhook
exports.handleWebhook = (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntent = event.data.object;
      console.log("PaymentIntent was successful!");
      break;
    case "checkout.session.completed":
      const session = event.data.object;
      console.log("Checkout session was successful!");
      fulfillOrder(session);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.send();
};

// Function to handle order fulfillment
function fulfillOrder(session) {
  console.log("Fulfilling order", session);
  // Implement your order fulfillment logic:
  // 1. Save order details to your database
  // 2. Send confirmation email
  // 3. Update inventory, etc.
}

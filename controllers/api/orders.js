module.exports = {
  intent,
};

async function intent(req, res, next) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET);
  const { amount } = req.body;

  try {
    console.log("YOOOO");
    const intent = await stripe.paymentIntents.create({
      amount: 400,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    res.status(200).send({
      clientSecret: intent.client_secret,
    });
  } catch (error) {
    console.log(error);
  }
}

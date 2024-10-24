// import * as functions from 'firebase-functions';
// import Stripe from 'stripe';

// // Initialize Stripe with your secret key
// const stripe = new Stripe('your_secret_key');

// // Cloud function to create a payment intent
// exports.createPaymentIntent = functions.https.onCall(async (data, _context) => {
//   const amount = data.amount; // The amount to charge, passed from the frontend

//   try {
//     // Create a Payment Intent
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: 'usd', // Use the correct currency for your project
//       automatic_payment_methods: {
//         enabled: true,
//       },
//     });

//     // Return the client secret to complete the payment on the client
//     return {
//       clientSecret: paymentIntent.client_secret,
//     };
//   } catch (error) {
//     // Assert that the error is an instance of Error
//     if (error instanceof Error) {
//       return {
//         error: error.message,
//       };
//     } else {
//       // Handle unexpected types of errors (if necessary)
//       return {
//         error: 'An unexpected error occurred',
//       };
//     }
//   }
// });

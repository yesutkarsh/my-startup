// app/api/create-order/route.js

import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id:"rzp_live_sUnHNyxx20QkET",
  key_secret:"TeoDyeql81OvhmnYY8LLZeUN"
});
export async function POST(req) {
  const { amount } = await req.json();

  const options = {
    amount: amount, // amount in the smallest currency unit
    currency: 'INR',
    receipt: 'receipt#1',
  };

  try {
    const order = await razorpay.orders.create(options);
    return new Response(JSON.stringify(order), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create order' }), { status: 500 });
  }
}

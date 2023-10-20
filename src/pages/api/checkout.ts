import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";


export default async function handleBuyProduct(request: NextApiRequest, response: NextApiResponse) {
  if (request.method !== 'POST') return response.status(405)

  const { priceId } = request.body

  console.log(priceId)

  if (!priceId) return response.status(400).json({ error: 'Preço não encontrado' })

  const successUrl = `${process.env.NEXT_URL}/success`
  const cancelUrl = `${process.env.NEXT_URL}`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1
      }
    ],
  })

  return response.status(201).json({ checkoutUrl: checkoutSession.url })
}
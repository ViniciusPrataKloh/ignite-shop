import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../contexts/cartContext";
import { stripe } from "../../lib/stripe";


export default async function handleBuyProduct(request: NextApiRequest, response: NextApiResponse) {
  if (request.method !== 'POST') return response.status(405)

  const { products } = request.body as { products: Product[] }

  if (!products) {
    return response.status(400).json({ error: "Products not found." });
  }

  // if (!priceId) return response.status(400).json({ error: 'Preço não encontrado' })

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: products.map((product) => ({
      price: product.defaultPriceId,
      quantity: 1,
    })),
  })

  return response.status(201).json({ checkoutUrl: checkoutSession.url })
}
import { useKeenSlider } from "keen-slider/react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { stripe } from "../lib/stripe";
import { CardProduct, HomeContainer } from "../styles/pages/home";

import 'keen-slider/keen-slider.min.css';

import Stripe from "stripe";
import { priceFormat } from "../lib/priceFormat";

interface HomeProps {
  products: Product[]
}

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">

      {
        products.map((product) => {
          return (
            <CardProduct className="keen-slider__slide" key={product.id}>
              <Image src={product.imageUrl} alt="" width={520} height={480} />
              <footer>
                <strong>{product.name}</strong>
                <span>{priceFormat(product.price)}</span>
              </footer>
            </CardProduct>)
        })
      }

    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      imageUrl: product.images[0],
      price: price.unit_amount
    }
  });

  return {
    props: {
      products
    }
  }
}
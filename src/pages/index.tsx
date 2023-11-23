import { useKeenSlider } from "keen-slider/react";
import { GetStaticProps } from "next";
import Image from "next/image";
import { stripe } from "../lib/stripe";
import { CardProduct, HomeContainer } from "../styles/pages/home";

import 'keen-slider/keen-slider.min.css';

import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import Stripe from "stripe";
import CartButtonComponent from "../components/cartButton";
import { CartContext } from "../contexts/cartContext";
import { priceFormat } from "../lib/priceFormat";

interface HomeProps {
  products: Product[]
}

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  const { addItem, itemAlreadyAdd } = useContext(CartContext)

  function handleAddItemToBag(product: Product, quantity: number, e: any) {
    e.preventDefault()

    if (!itemAlreadyAdd(product.id)) {
      addItem(product)
    }
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">

        {
          products.map((product) => {
            return (
              <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
                <CardProduct className="keen-slider__slide" >
                  <Image src={product.imageUrl} alt="" width={520} height={480} />
                  <footer>
                    <div>
                      <strong>{product.name}</strong>
                      <span>{priceFormat(product.price)}</span>
                    </div>

                    <CartButtonComponent variant="green" handleOnClick={(e) => handleAddItemToBag(product, 1, e)} />
                  </footer>
                </CardProduct>
              </Link>
            )
          })
        }

      </HomeContainer>
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async () => {
export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
      defaultPriceId: price.id
    }
  });

  return {
    props: {
      products
    },

    revalidate: 60 * 60 * 2 // 2 hours
  }
}
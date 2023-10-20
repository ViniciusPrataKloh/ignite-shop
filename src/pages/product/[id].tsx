import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Stripe from "stripe";
import { priceFormat } from "../../lib/priceFormat";
import { stripe } from "../../lib/stripe";
import { DefaultSkeleton, ImageContainer, ImageSkeletonContainer, InfoSkeletonContainer, ProductContainer, ProductContent, SkeletonItem } from "../../styles/pages/product";
import { useState } from "react";
import axios from "axios";
import Head from "next/head";

interface ProductProps {
    product: {
        id: string;
        name: string;
        description: string;
        imageUrl: string;
        price: number;
        defaultPriceId: string;
    }
}

export default function Product({ product }: ProductProps) {
    const { isFallback } = useRouter()
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState<boolean>(false)

    if (isFallback) {
        return (
            <>
                <Head>
                    <title>{product.name} | Ignite Shop</title>
                </Head>

                <ProductContainer>
                    <ImageSkeletonContainer>
                        <SkeletonItem />
                    </ImageSkeletonContainer>
                    <InfoSkeletonContainer>
                        <DefaultSkeleton />
                        <DefaultSkeleton />
                        <DefaultSkeleton />
                    </InfoSkeletonContainer>
                </ProductContainer>
            </>
        )
    }

    async function handleBuyProduct() {
        try {
            setIsCreatingCheckoutSession(true)

            const response = await axios.post('/api/checkout', {
                priceId: product.defaultPriceId
            })

            const { checkoutUrl } = response.data

            window.location.href = checkoutUrl
        } catch (error) {
            setIsCreatingCheckoutSession(false)
            alert(error)
        }
    }

    return (
        <>
            <Head>
                <title>{product.name}</title>
            </Head>

            <ProductContainer>
                <ImageContainer>
                    <Image src={product.imageUrl} alt="" width={520} height={480} />
                </ImageContainer>

                <ProductContent>
                    <h1>{product.name}</h1>
                    <span>{priceFormat(product.price)}</span>

                    <p>{product.description}</p>

                    <button onClick={handleBuyProduct} disabled={isCreatingCheckoutSession}>
                        Comprar agora
                    </button>
                </ProductContent>
            </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: 'prod_OqfHGMf9gy9Vbt' } },
            // { params: { id: 'prod_OqfHmYCBD9YLTA' } },
            // { params: { id: 'prod_OqfGZ9iRo6S3H5' } },
            // { params: { id: 'prod_OqfFOWaMwCaPCU' } },
        ],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const id = params.id;

    await setTimeout(() => { }, 1000);

    const product = await stripe.products.retrieve(id, {
        expand: ['default_price']
    })

    const price = product.default_price as Stripe.Price

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                description: product.description,
                imageUrl: product.images[0],
                price: price.unit_amount,
                defaultPriceId: price.id
            }
        },
        revalidate: 60 * 60 * 2
    }
}
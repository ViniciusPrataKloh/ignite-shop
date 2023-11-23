import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import Stripe from "stripe";
import { CartContext } from "../../contexts/cartContext";
import { priceFormat } from "../../lib/priceFormat";
import { stripe } from "../../lib/stripe";
import { DefaultSkeleton, ImageContainer, ImageSkeletonContainer, InfoSkeletonContainer, ProductContainer, ProductContent, SkeletonItem } from "../../styles/pages/product";

interface ProductProps {
    product: {
        id: string;
        name: string;
        imageUrl: string;
        price: number;
        numberPrice: number;
        description: string;
        defaultPriceId: string;
    }
}

export default function Product({ product }: ProductProps) {
    const { isFallback } = useRouter()

    const { addItem, itemAlreadyAdd } = useContext(CartContext)

    if (isFallback) {
        return (
            <>
                <Head>
                    <title>Camiseta | Ignite Shop</title>
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

    return (
        <>
            <Head>
                <title>Camiseta | Ignite Shop</title>
            </Head>

            <ProductContainer>
                <ImageContainer>
                    <Image src={product.imageUrl} alt="" width={520} height={480} />
                </ImageContainer>

                <ProductContent>
                    <h1>{product.name}</h1>
                    <span>{priceFormat(product.price)}</span>

                    <p>{product.description}</p>

                    <button
                        onClick={() => addItem(product)}
                        disabled={false}>
                        Colocar na sacola
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
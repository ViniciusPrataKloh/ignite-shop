import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Stripe from "stripe";
import { priceFormat } from "../../lib/priceFormat";
import { stripe } from "../../lib/stripe";
import { ImageContainer, ImageContainerSkeletons, ProductContainer, ProductContent } from "../../styles/pages/product";

interface ProductProps {
    product: {
        id: string;
        name: string;
        description: string;
        imageUrl: string;
        price: number;
    }
}

export default function Product({ product }: ProductProps) {
    const { isFallback } = useRouter()

    if (isFallback) {
        return (
            <ProductContainer>
                <ImageContainerSkeletons>
                </ImageContainerSkeletons>
            </ProductContainer>
        )
    }

    return (
        <ProductContainer>
            <ImageContainer>
                <Image src={product.imageUrl} alt="" width={520} height={480} />
            </ImageContainer>

            <ProductContent>
                <h1>{product.name}</h1>
                <span>{priceFormat(product.price)}</span>

                <p>{product.description}</p>

                <button>
                    Comprar agora
                </button>
            </ProductContent>
        </ProductContainer>
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

    setTimeout(() => { }, 3000);

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
                price: price.unit_amount
            }
        },
        revalidate: 60 * 60 * 2
    }
}
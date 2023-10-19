import { useRouter } from "next/router";
import { ImageContainer, ProductContainer, ProductContent } from "../../styles/pages/product";

export default function Product() {
    const { query } = useRouter();

    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductContent>
                <h1>Camiseta 1</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ea dolorum eligendi. Quo incidunt maxime, placeat velit quasi totam atque, laudantium, ipsam ad architecto et quidem ea expedita vero minima!</p>

                <button>
                    Comprar agora
                </button>
            </ProductContent>
        </ProductContainer>
    )
}
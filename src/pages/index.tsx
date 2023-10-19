import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { CardProduct, HomeContainer } from "../styles/pages/home";

import 'keen-slider/keen-slider.min.css';

import shirt_1 from "../assets/Shirt/1.png";
import shirt_2 from "../assets/Shirt/2.png";
import shirt_3 from "../assets/Shirt/3.png";
import shirt_4 from "../assets/Shirt/4.png";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">

      <CardProduct className="keen-slider__slide">
        <Image src={shirt_1} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </CardProduct>

      <CardProduct className="keen-slider__slide">
        <Image src={shirt_2} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </CardProduct>

      <CardProduct className="keen-slider__slide">
        <Image src={shirt_3} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </CardProduct>

      <CardProduct className="keen-slider__slide">
        <Image src={shirt_4} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </CardProduct>

    </HomeContainer>
  )
}
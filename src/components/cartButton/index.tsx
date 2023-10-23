import { Bag } from "phosphor-react";
import { CartButton } from "./styles"

export default function CartButtonComponent() {
  return (
    <CartButton color='gray'>
      <Bag size={24} />
    </CartButton>
  )
}
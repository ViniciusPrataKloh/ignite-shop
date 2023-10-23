import { Bag } from "phosphor-react";
import { CartButton } from "./styles"

interface CartButtonProps {
  variant: 'gray' | 'green'
}

export default function CartButtonComponent({ variant }: CartButtonProps) {
  return (
    <CartButton color={variant}>
      <Bag size={24} />
    </CartButton>
  )
}
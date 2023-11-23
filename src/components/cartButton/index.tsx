import { Bag } from "phosphor-react";
import { CartButton } from "./styles";

interface CartButtonProps extends React.HTMLProps<HTMLButtonElement> {
  variant: 'gray' | 'green',
  handleOnClick?: (e: any) => void
}

export default function CartButtonComponent({ variant, handleOnClick }: CartButtonProps) {
  return (
    <CartButton
      color={variant}
      onClick={handleOnClick}
    >
      <Bag size={28} />
    </CartButton>
  )
}
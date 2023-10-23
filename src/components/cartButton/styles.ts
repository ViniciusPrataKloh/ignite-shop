import { styled } from "../../styles";


export const CartButton = styled('button', {
  padding: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 48,
  height: 48,
  borderRadius: 8,
  cursor: 'pointer',

  variants: {
    color: {
      gray: {
        backgroundColor: '$gray800',
        color: '$gray100',
      },
      green: {
        backgroundColor: '$green500',
        color: '$gray100',
      },
    },
  },


})
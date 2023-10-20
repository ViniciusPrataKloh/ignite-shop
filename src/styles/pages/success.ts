import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '8rem auto 0',
  height: '656',
  // marginTop: '8rem',

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
    marginBottom: '4rem'
  },

  p: {
    fontSize: '$xl',
    color: '$gray100',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    marginBottom: '6rem',
    lineHeight: 1.4
  },

  a: {
    color: '$green500',
    fontSize: "$lg",
    fontWeight: 'bold',
    textDecoration: 'none',

    '&:hover': {
      color: '$green300'
    }
  }
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 130,
  height: 145,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
})
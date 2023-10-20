import { styled, keyframes } from "..";

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',
  maxWidth: 1180,
  margin: '0 auto',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 'calc(656px - 0.5rem)',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'covers'
  }
})

export const ProductContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300'
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300'
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300'
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    color: '$white',
    border: 0,
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$lg',

    '&:disabled': {
      cursor: 'not-allowed',
      opacity: '0.6'
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300'
    }
  }
})


// Animation Skeleton

const skeletonAnimation = keyframes({
  "0%": {
    backgroundPosition: "-200px 0",
  },
  "100%": {
    backgroundPosition: "calc(200px + 100%) 0",
  },
})


// Skeletons

export const ImageSkeletonContainer = styled('div', {
  width: 576,
  height: 'calc(656px - 0.5rem)',
  background: '$gray900',
  borderRadius: 8,
  padding: '0.25rem',
})

export const InfoSkeletonContainer = styled('div', {
  width: 480,
  background: '$gray900',
  borderRadius: 8,
  padding: '2rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  gap: 24
})

export const DefaultSkeleton = styled('div', {
  background: '$gray800',
  width: '100%',
  height: '5%',
  borderRadius: 8,
})

export const SkeletonItem = styled("div", {
  background: '$gray800',
  width: '100%',
  height: '100%',
  borderRadius: 8,
})

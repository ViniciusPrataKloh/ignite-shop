export const ProductCart = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 20,
  marginBottom: 24,

  div: {
    display: 'flex',
    flexDirection: 'column',

    span: {
      marginBottom: 2
    },

    strong: {
      marginBottom: 8
    },

    button: {
      background: 'transparent',
      textAlign: 'left',
      fontWeight: 'bold',
      color: '$green500',

      '&:hover': {
        color: '$green300',
      }
    }
  }
})

export const ImageContainer = styled('div', {
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

export const CartFooter = styled('footer', {
  display: 'flex',
  flexDirection: 'column',

  div: {
    display: 'flex',
    justifyContent: 'space-between',

    span: {
      marginBottom: 8
    },
  },

  button: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 58,
    marginBottom: 38,

    borderRadius: 8,
    color: '$gray100',
    background: '$green500',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:hover': {
      background: '$green300',
    },
  }
})


// Radix UI

import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "../../styles";

export const DialogPortal = styled(Dialog.Portal, {
  height: '100%',
  maxHeight: '100vh',
  width: 480,
  maxWidth: 480,
  margin: '0 auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  background: '$gray800'

})

export const DialogTitle = styled(Dialog.Title, {
  color: '$gray100',
  background: 'red'
})

export const DialogTrigger = styled(Dialog.Trigger, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray100',
  gap: 8,
  position: "relative",

  span: {
    background: "$green500",
    color: "$white",
    borderRadius: "50%",
    width: "1.5rem",
    height: "1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.875rem",
    fontWeight: "bold",
    position: "absolute",
    top: "calc(-1.5rem / 2)",
    right: "calc(-1.5rem / 2)",
    outline: "6px solid $gray900",
  }
})

export const DialogDescription = styled(Dialog.Description, {
  color: '$gray100'
})

export const DialogClose = styled(Dialog.Close, {
  color: '$gray100',
  background: 'transparent',
  marginBottom: 24,
  marginLef: 0,
  display: 'flex',
  justifyContent: 'end',

  '&:hover': {
    color: '$gray300',
  }
})

export const DialogContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: "30rem",

  height: '100%',
  maxHeight: '100vh',
  margin: '0 auto',
  paddingTop: 24,
  paddingLeft: 24,
  paddingRight: 24,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  background: '$gray800',

  h2: {
    fontWeight: 700,
    fontSize: "$lg",
    color: "$gray100",
    marginBottom: "2rem",
  },
})

export const DialogContentEmpty = styled(Dialog.Content, {
  position: 'fixed',
  flex: 1,
  top: 0,
  right: 0,
  bottom: 0,
  width: "30rem",
  background: '$gray800',

  height: '100%',
  maxHeight: '100vh',
  margin: '0 auto',
  paddingTop: 24,
  paddingLeft: 24,
  paddingRight: 24,

  display: "flex",
  flexDirection: "column",

  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,

    p: {
      color: "$gray300",
      fontSize: "$md",
      marginTop: "2rem",
      marginBottom: "1rem",
    },
  }
})

export const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: 'black',
  position: 'fixed',
  inset: 0,
  opacity: 0.2
  // animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

// Styles


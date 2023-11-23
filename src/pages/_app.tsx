import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/appStyles'

import HeaderComponent from '../components/header'
import CartContextProvider from '../contexts/cartContext'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Header>
          <HeaderComponent />
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}
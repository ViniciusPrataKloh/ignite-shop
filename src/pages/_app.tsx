import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/AppStyles'

import logo from '../assets/logo.svg'
import Image from 'next/image'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image alt='logo' src={logo} />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import { theme } from '../config/theme'
export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <div id="preloader" className="preloader" />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
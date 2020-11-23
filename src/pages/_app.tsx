import { ChakraProvider } from '@chakra-ui/react'
import DarkModeHandler from 'hooks/DarkModeHandler'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <DarkModeHandler />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

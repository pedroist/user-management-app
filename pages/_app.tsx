import { ChakraProvider } from '@chakra-ui/react'
import { UserProvider } from '../context/userContext'

function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ChakraProvider>
  )
}

export default App
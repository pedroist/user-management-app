import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { UserProvider } from '../context/userContext'
import { User } from '../interfaces/user'
import { sampleUserData } from '../utils/sample-data'

function MyApp({ Component, pageProps }: AppProps) {
  const users: User[] = sampleUserData

  return (
    <ChakraProvider>
      <UserProvider initialUsers={users}>
        <Component {...pageProps} />
      </UserProvider>
    </ChakraProvider>
  )
}

export default MyApp

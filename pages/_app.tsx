import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { UserProvider } from '../context/userContext'
import { User } from '../interfaces/user'
import { sampleGroupData, sampleUserData } from '../utils/sample-data'
import { GroupProvider } from '../context/groupContext'
import { Group } from '../interfaces/group'

function MyApp({ Component, pageProps }: AppProps) {
  const users: User[] = sampleUserData
  const groups: Group[] = sampleGroupData

  return (
    <ChakraProvider>
      <UserProvider initialUsers={users}>
        <GroupProvider initialGroups={groups}>
          <Component {...pageProps} />
        </GroupProvider>
      </UserProvider>
    </ChakraProvider>
  )
}

export default MyApp

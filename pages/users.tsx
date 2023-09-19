import { GetStaticProps } from 'next'

import { User } from '../interfaces'
import { sampleUserData } from '../utils/sample-data'
import Layout from '../components/Layout'
import UserList from '../components/UserList'
import { Box, Heading } from '@chakra-ui/react'

type Props = {
  items: User[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Users List">
    <Heading>Users List</Heading>
    <Box my="40px">
      <UserList items={items} />
    </Box>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData
  return { props: { items } }
}

export default WithStaticProps

import { GetStaticProps, NextPage } from 'next'
import { User } from '../interfaces/user'
import { sampleUserData } from '../utils/sample-data'
import Layout from '../components/Layout'
import UserTable from '../components/UserTable'
import { Box, Heading } from '@chakra-ui/react'


const UsersPage: NextPage = () => (
  <Layout title="Users List">
    <Heading>Users List</Heading>
    <Box my="40px">
      <UserTable/>
    </Box>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const users: User[] = sampleUserData
  return { props: { users } }
}

export default UsersPage

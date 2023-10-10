import { NextPage } from 'next'
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

export default UsersPage

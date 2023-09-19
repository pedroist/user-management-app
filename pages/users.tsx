import { GetStaticProps, NextPage } from 'next'
import { User } from '../interfaces/user'
import { sampleUserData } from '../utils/sample-data'
import Layout from '../components/Layout'
import UserList from '../components/UserList'
import { Box, Heading } from '@chakra-ui/react'

interface UsersPageProps {
  users: User[]
}

const UsersPage: NextPage<UsersPageProps> = ({ users }) => (
  <Layout title="Users List">
    <Heading>Users List</Heading>
    <Box my="40px">
      <UserList users={users} />
    </Box>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const users: User[] = sampleUserData
  return { props: { users } }
}

export default UsersPage

import { NextPage } from 'next'
import Layout from '../components/Layout'
import { Box, Heading } from '@chakra-ui/react'
import GroupDetail from '../components/GroupDetail'

const GroupsPage: NextPage = () => (
  <Layout title="Groups List">
    <Heading>Groups List</Heading>
    <Box my="40px">
      <GroupDetail />
    </Box>
  </Layout>
)

export default GroupsPage

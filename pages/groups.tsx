import { NextPage } from 'next'
import Layout from '../components/Layout'
import { Box, Heading } from '@chakra-ui/react'
import GroupSection from '../components/GroupSection'

const GroupsPage: NextPage = () => (
  <Layout title="Groups List">
    <Heading>Groups List</Heading>
    <Box my="40px">
      <GroupSection />
    </Box>
  </Layout>
)

export default GroupsPage

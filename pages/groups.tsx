import { NextPage } from 'next'
import Layout from '../components/Layout'
import { Box, Heading } from '@chakra-ui/react'
import GroupDetail from '../components/GroupDetail'
import { useGroups } from '../context/groupContext'

const GroupsPage: NextPage = () => {
  const { groups } = useGroups()

  return (
    <Layout title="Groups List">
      <Heading>Groups List</Heading>
      {(groups || []).map((group) => (
        <Box my="40px">
          <GroupDetail groupId={group.id} key={group.id} />
        </Box>
      ))}
    </Layout>
  )
}

export default GroupsPage

import { NextPage } from 'next'
import Layout from '../components/Layout'
import { Box, Button, Flex, Heading, useDisclosure } from '@chakra-ui/react'
import GroupDetail from '../components/GroupDetail'
import { useGroups } from '../context/groupContext'
import { AddUserModal } from '../components/AddUserModal'
import classes from './groups.module.scss'
import { useCallback } from 'react'
import { GroupInput } from '../interfaces/group'
import { AddGroupModal } from '../components/AddGroupModal'

const GroupsPage: NextPage = () => {
  const { groups, addGroup } = useGroups()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const onSubmit = useCallback(
    async (groupInput: GroupInput) => {
      const postGroup = (groupInput: GroupInput) => {
        addGroup(groupInput)
        console.log('Submitted new group:', groupInput)
      }
      postGroup(groupInput)
    },
    [addGroup]
  )

  return (
    <Layout title="Groups List">
      <Heading>Groups List</Heading>

      <Flex direction="column" alignItems="flex-end" mb="40px">
        <Button
          className={classes.addGroupButton}
          bg="black"
          color="white"
          onClick={onOpen}
        >
          Add Group +
        </Button>
      </Flex>
      <AddGroupModal isOpen={isOpen} onClose={onClose} onSubmit={onSubmit} />

      {(groups || []).map((group) => (
        <Box my="40px">
          <GroupDetail groupId={group.id} key={group.id} />
        </Box>
      ))}
    </Layout>
  )
}

export default GroupsPage

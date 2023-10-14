import React, { FC, useCallback } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Tag,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Heading,
  Button,
  Flex,
  useDisclosure,
} from '@chakra-ui/react'
import { FiMoreVertical } from 'react-icons/fi'
import classes from './GroupDetail.module.scss'
import { useUsers } from '../context/userContext'
import { getUsersByGroupId } from '../utils/userUtils'
import { getGroupNameById } from '../utils/groupUtils'
import { useGroups } from '../context/groupContext'
import { AddUserModal } from './AddUserModal'
import { GroupInput } from '../interfaces/group'

interface GroupDetailProps {
  groupId: string
}

const GroupDetail: FC<GroupDetailProps> = ({ groupId }) => {
  const { users, deleteUser } = useUsers()
  const { groups, deleteGroup } = useGroups()
  const usersByGroup = getUsersByGroupId(users, groupId)

  const groupName = getGroupNameById(groupId, groups)

  return (
    <>
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb="40px"
      >
        {groupName && (
          <Heading as="h3" size={'md'}>
            {groupName}
          </Heading>
        )}
        <Button
          className={classes.addGroupButton}
          bg="gray.50"
          onClick={() => deleteGroup(groupId)}
        >
          Delete Group
        </Button>
      </Flex>

      <TableContainer>
        <Table variant="simple">
          <TableCaption>
            List of users of a specific group and respective details
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Type</Th>
              <Th>Groups</Th>
              <Th>Age</Th>
              <Th>Location</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {(usersByGroup || []).map((user) => (
              <Tr key={user.id}>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>
                  <Tag size={'md'} variant="solid" colorScheme="green">
                    {user.type}
                  </Tag>
                </Td>
                <Td>
                  {(user.groupIds || []).map((groupId, index) => {
                    const group = getGroupNameById(groupId, groups)

                    return (
                      group !== null && (
                        <Tag
                          key={index}
                          size={'md'}
                          variant="solid"
                          colorScheme="blue"
                          mr="10px"
                        >
                          {group}
                        </Tag>
                      )
                    )
                  })}
                </Td>
                <Td>{user.age}</Td>
                <Td>{user.location}</Td>
                <Td>
                  <Menu>
                    <MenuButton
                      className={classes.menuButton}
                      as={IconButton}
                      aria-label="actions"
                      size="sm"
                      variant="ghost"
                      colorScheme="gray"
                      icon={<FiMoreVertical />}
                      isRound
                    />
                    <MenuList>
                      <MenuItem>Add to a Group</MenuItem>
                      <MenuItem onClick={() => deleteUser(user.id)}>
                        Delete
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default GroupDetail

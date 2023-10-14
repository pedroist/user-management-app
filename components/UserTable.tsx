import React, { FC, useCallback } from 'react'
import { UserInput } from '../interfaces/user'
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
  useDisclosure,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { FiMoreVertical } from 'react-icons/fi'
import { AddUserModal } from './AddUserModal'
import classes from './UserTable.module.scss'
import { useUsers } from '../context/userContext'
import { getGroupNameById } from '../utils/groupUtils'
import { useGroups } from '../context/groupContext'

const UserTable: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { users, addUser, deleteUser } = useUsers()
  const { groups } = useGroups()

  const onSubmit = useCallback(
    async (userInput: UserInput) => {
      const postUser = (userInput: UserInput) => {
        addUser(userInput)
        console.log('Submitted new user:', userInput)
      }
      postUser(userInput)
    },
    [addUser]
  )

  return (
    <>
      <Flex direction="column" alignItems="flex-end" mb="40px">
        <Button
          className={classes.addUserButton}
          bg="black"
          color="white"
          onClick={onOpen}
        >
          Add User +
        </Button>
      </Flex>
      <AddUserModal isOpen={isOpen} onClose={onClose} onSubmit={onSubmit} />

      <TableContainer>
        <Table variant="simple">
          <TableCaption>List of users and respective details</TableCaption>
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
            {(users || []).map((user) => (
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

export default UserTable

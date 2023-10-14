import React, { FC } from 'react'
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
} from '@chakra-ui/react'
import { FiMoreVertical } from 'react-icons/fi'
import classes from './UserTable.module.scss'
import { useUsers } from '../context/userContext'

const GroupDetail: FC = () => {
  const { users, deleteUser } = useUsers()

  return (
    <>
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
                  {(user.groups || []).map((group, index) => (
                    <Tag
                      key={index}
                      size={'md'}
                      variant="solid"
                      colorScheme="blue"
                      mr="10px"
                    >
                      {group}
                    </Tag>
                  ))}
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

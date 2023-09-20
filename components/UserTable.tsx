import React, { FC } from 'react'
import UserListItem from './UserListItem'
import { User } from '../interfaces/user'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Tag,
} from '@chakra-ui/react'

interface UserListProps {
  users: User[]
}

const UserList: FC<UserListProps> = ({ users }) => (
  <>
  <TableContainer>
    <Table variant='simple'>
      <TableCaption>List of users and respective details</TableCaption>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Type</Th>
          <Th>Groups</Th>
          <Th>Age</Th>
          <Th>Location</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((user) => (
          <Tr>
            <Td>{user.name}</Td>
            <Td>{user.email}</Td>
            <Td>
              <Tag size={'md'} variant='solid' colorScheme='green'>
                {user.type}
              </Tag>
            </Td>
            <Td>
              {(user.groups || []).map((group, index) => (
                <Tag key={index} size={'md'} variant='solid' colorScheme='blue' mr='10px'>
                  {group}
                </Tag>
              ))}
            </Td>
            <Td>{user.age}</Td>
            <Td>{user.location}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </TableContainer>
  </>
)

export default UserList

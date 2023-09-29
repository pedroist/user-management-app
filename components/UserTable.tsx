import React, { FC } from 'react'
import { User } from '../interfaces/user'
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
} from '@chakra-ui/react'
import { FiMoreVertical } from 'react-icons/fi';
import { AddUserModal } from './AddUserModal'
import classes from './UserTable.module.scss'

interface UserTableProps {
  users: User[]
}

const UserTable: FC<UserTableProps> = ({ users }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return(
    <>
      <Flex direction="column" alignItems="flex-end" mb="40px">
        <Button className={classes.addUserButton} bg='black' color='white' onClick={onOpen}>Add User +</Button>
      </Flex>
      <AddUserModal isOpen={isOpen} onClose={onClose}/>

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
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => (
              <Tr key={user.id}>
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
                <Td>
                  <IconButton
                    aria-label='actions'
                    size='sm'
                    variant='ghost'
                    colorScheme='gray'
                    icon={<FiMoreVertical/>}
                    isRound
                  />
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

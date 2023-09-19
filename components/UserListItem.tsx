import React, { FC } from 'react'
import {Card, HStack, Tag, Text } from '@chakra-ui/react'
import { User } from '../interfaces/user'

interface UserListItemProps {
  user: User
}

const UserListItem: FC<UserListItemProps> = ({user}) => (
    <Card variant='elevated' direction={'row'} justify={'space-between'} p="10px 20px">
      <Text mr="2">{user.name}</Text>
      <Text mr="2">{user.email}</Text>
      <Tag size={'md'} variant='solid' colorScheme='green'>
        {user.type}
      </Tag>
      <HStack>
        {(user.groups || []).map((group, index) => (
          <Tag key={index} size={'md'} variant='solid' colorScheme='blue'>
            {group}
          </Tag>
        ))}
      </HStack>
      <Text>{user.age}</Text>
      <Text>{user.location}</Text>
    </Card>
)

export default UserListItem

import React from 'react'
import {Card, HStack, Tag, Text } from '@chakra-ui/react'

interface UserListItemProps {

}

const UserListItem = () => (
    <Card variant='elevated' direction={'row'} justify={'space-between'} p="10px 20px">
      <Text mr="2">Pedro Castro</Text>
      <Text mr="2">pedro.castro@gmail.com</Text>
      <Tag size={'md'} variant='solid' colorScheme='green'>
        Frontend
      </Tag>
      <HStack>
        <Tag size={'md'} variant='solid' colorScheme='blue'>
          Group 1
        </Tag>
        <Tag size={'md'} variant='solid' colorScheme='blue'>
          Group 2
        </Tag>
        <Tag size={'md'} variant='solid' colorScheme='blue'>
          Group 3
        </Tag>
      </HStack>
      <Text>30</Text>
      <Text>Lisbon, Portugal</Text>
    </Card>
)

export default UserListItem

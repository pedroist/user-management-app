import * as React from 'react'
import UserListItem from './UserListItem'
import { User } from '../interfaces'

type Props = {
  items: User[]
}

const UserList = ({ items }: Props) => (
  <>
    {items.map((item) => (
        <UserListItem key={item.id}/>
    ))}
  </>
)

export default UserList

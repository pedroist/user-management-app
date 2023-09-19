import React, { FC } from 'react'
import UserListItem from './UserListItem'
import { User } from '../interfaces/user'

interface UserListProps {
  users: User[]
}

const UserList: FC<UserListProps> = ({ users }) => (
  <>
    {users.map((user) => (
        <UserListItem key={user.id} user={user}/>
    ))}
  </>
)

export default UserList

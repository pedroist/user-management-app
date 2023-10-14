import React, { FC, createContext, useContext, useState } from 'react'
import { User, UserInput } from '../interfaces/user'
import { generateRandomId } from '../utils/generalUtils'

interface UserContextProps {
  users: User[]
  initialUsers: User[]
  addUser: (user: UserInput) => void
  deleteUser: (id: string) => void
  removeGroupFromUsers: (groupId: string) => void
}

const UserContext = createContext<UserContextProps | null>(null)

// Hook to get users from context
export const useUsers = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUsers must be used within a UserProvider')
  }
  return context
}

export const UserProvider: FC<{ initialUsers: User[] }> = ({
  children,
  initialUsers,
}) => {
  const [users, setUsers] = useState<User[]>(initialUsers)

  const addUser = (user: UserInput) => {
    const id = generateRandomId()
    setUsers([...users, { ...user, id, groupIds: [] }])
  }

  const deleteUser = (id: string) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const removeGroupFromUsers = (groupId: string) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => ({
        ...user,
        groups: user.groupIds.filter((id) => id !== groupId),
      }))
    )
  }

  return (
    <UserContext.Provider
      value={{ users, initialUsers, addUser, deleteUser, removeGroupFromUsers }}
    >
      {children}
    </UserContext.Provider>
  )
}

import React, { FC, createContext, useContext, useState } from 'react'
import { generateRandomId } from '../utils/generalUtils'
import { Group, GroupInput } from '../interfaces/group'
import { useUsers } from './userContext'

interface GroupContextProps {
  groups: Group[]
  initialGroups: Group[]
  addGroup: (user: GroupInput) => void
  deleteGroup: (id: string) => void
}

const GroupContext = createContext<GroupContextProps | null>(null)

// Hook to get groups from context
export const useGroups = () => {
  const context = useContext(GroupContext)
  if (!context) {
    throw new Error('useGroups must be used within a GroupProvider')
  }
  return context
}

export const GroupProvider: FC<{ initialGroups: Group[] }> = ({
  children,
  initialGroups,
}) => {
  const [groups, setGroups] = useState<Group[]>(initialGroups)
  const { users, removeGroupFromUsers } = useUsers()

  const addGroup = (group: GroupInput) => {
    const id = generateRandomId()
    setGroups([...groups, { ...group, id }])
  }

  const deleteGroup = (groupId: string) => {
    setGroups(groups.filter((group) => group.id !== groupId))

    removeGroupFromUsers(groupId)
  }

  return (
    <GroupContext.Provider
      value={{ groups, initialGroups, addGroup, deleteGroup }}
    >
      {children}
    </GroupContext.Provider>
  )
}

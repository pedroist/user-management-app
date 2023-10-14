import { User } from '../interfaces/user'

export const getUsersByGroupId = (users: User[], groupId: string) => {
  return users.filter((user) => user.groupIds.includes(groupId))
}

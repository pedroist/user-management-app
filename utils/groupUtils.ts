import { Group } from '../interfaces/group'

export const getGroupNameById = (
  groupId: string,
  groups: Group[]
): string | null => {
  const group: Group = groups.find((group) => group.id === groupId)
  return group ? group.name : null
}

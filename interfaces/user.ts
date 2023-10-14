import { Group } from './group'

export interface User {
  id: string
  avatar?: string
  name: string
  email: string
  type: string
  groupIds: string[]
  age: number
  location: string
}

export type UserInput = Omit<User, 'id' | 'groupIds'>

import { Group } from './group'

export interface User {
  id: string
  avatar?: string
  name: string
  email: string
  type: string
  groups: Group[]
  age: number
  location: string
}

export type UserInput = Omit<User, 'id' | 'groups'>

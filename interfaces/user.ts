export interface User {
  id: number
  avatar?: string
  name: string
  email: string
  type: string
  groups: string[]
  age: number
  location: string
}

export type UserInput = Omit<User, 'id' | 'groups'>
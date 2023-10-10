export interface User {
  id: string
  avatar?: string
  name: string
  email: string
  type: string
  groups: string[]
  age: number
  location: string
}

export type UserInput = Omit<User, 'id' | 'groups'>
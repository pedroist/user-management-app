import { User } from '../interfaces/user'

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 1,
    avatar: '',
    name: 'Pedro Castro',
    email: 'pedro.castro@gmail.com',
    type: 'Fullstack',
    groups: ["Group 1", "Group 2", "Group 3"],
    age: 30,
    location: 'Barcelona, Spain'
  },
]

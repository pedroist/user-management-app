import { Group } from '../interfaces/group'
import { User } from '../interfaces/user'

/** Dummy user data. */
export const sampleUserData: User[] = [
  {
    id: '1',
    avatar: '',
    name: 'Pedro Castro',
    email: 'pedro.castro@gmail.com',
    type: 'Fullstack',
    groupIds: ['1', '2', '3'],
    age: 30,
    location: 'Barcelona, Spain',
  },
  {
    id: '2',
    avatar: '',
    name: 'John Gonzalez',
    email: 'john.gonzalez@gmail.com',
    type: 'Frontend',
    groupIds: ['2', '3'],
    age: 26,
    location: 'London, England',
  },
  {
    id: '3',
    avatar: '',
    name: 'Anna Zimmer',
    email: 'anna.zimmer@gmail.com',
    type: 'Backend',
    groupIds: ['3'],
    age: 23,
    location: 'Berlin, Germany',
  },
]

export const sampleGroupData: Group[] = [
  { id: '1', name: 'Group 1' },
  { id: '2', name: 'Group 2' },
  { id: '3', name: 'Group 3' },
]

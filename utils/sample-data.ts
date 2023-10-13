import { User } from '../interfaces/user'

/** Dummy user data. */
export const sampleUserData: User[] = [
  {
    id: '1',
    avatar: '',
    name: 'Pedro Castro',
    email: 'pedro.castro@gmail.com',
    type: 'Fullstack',
    groups: [
      { id: '1', name: 'Group 1' },
      { id: '2', name: 'Group 2' },
      { id: '3', name: 'Group 3' },
    ],
    age: 30,
    location: 'Barcelona, Spain',
  },
  {
    id: '2',
    avatar: '',
    name: 'John Gonzalez',
    email: 'john.gonzalez@gmail.com',
    type: 'Frontend',
    groups: [
      { id: '2', name: 'Group 2' },
      { id: '3', name: 'Group 3' },
    ],
    age: 26,
    location: 'London, England',
  },
  {
    id: '3',
    avatar: '',
    name: 'Anna Zimmer',
    email: 'anna.zimmer@gmail.com',
    type: 'Backend',
    groups: [{ id: '3', name: 'Group 3' }],
    age: 23,
    location: 'Berlin, Germany',
  },
]

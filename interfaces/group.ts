export interface Group {
  id: string
  name: string
}

export type GroupInput = Omit<Group, 'id'>
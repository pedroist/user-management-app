import React, { FC, createContext, useContext, useState } from 'react';
import { User, UserInput } from '../interfaces/user'
import { generateRandomId } from '../utils/utils'

interface UserContextProps {
    users: User[];
    initialUsers: User[];
    addUser: (user: UserInput) => void;
    deleteUser: (id: string) => void;
}

const UserContext = createContext<UserContextProps | null>(null);

// Hook to get users from context
export const useUsers = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUsers must be used within a UserProvider");
    }
    return context;
};

export const UserProvider: FC<{ initialUsers: User[] }> = ({ children, initialUsers }) => {
    const [users, setUsers] = useState<User[]>(initialUsers);
    
    const addUser = (user: UserInput) => {
      const id = generateRandomId()
      setUsers([...users, {...user, id, groups: []}]);
    };
    
    const deleteUser = (id: string) => {
      setUsers(users.filter(user => user.id !== id));
    };
  
    return (
      <UserContext.Provider value={{ users, initialUsers, addUser, deleteUser }}>
        {children}
      </UserContext.Provider>
    );
  };
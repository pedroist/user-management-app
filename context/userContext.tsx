import React, { FC, createContext, useContext, useState } from 'react';
import { User } from '../interfaces/user'

interface UserContextProps {
    users: User[];
    initialUsers: User[];
    addUser: (user: User) => void;
    deleteUser: (id: number) => void;
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
    
    const addUser = (user: User) => {
      setUsers([...users, user]);
    };
    
    const deleteUser = (id: number) => {
      setUsers(users.filter(user => user.id !== id));
    };
  
    return (
      <UserContext.Provider value={{ users, initialUsers, addUser, deleteUser }}>
        {children}
      </UserContext.Provider>
    );
  };
import React, { createContext, useContext, useState } from 'react';
import { User } from '../interfaces/user'

interface UserContextProps {
    users: User[];
    addUser: (user: User) => void;
    deleteUser: (id: number) => void;
}

const UserContext = createContext<UserContextProps | null>(null);

export const useUsers = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUsers must be used within a UserProvider");
    }
    return context;
};

export const UserProvider: React.FC = ({ children }) => {
    const [users, setUsers] = useState<User[]>([
      { id: 2,
        avatar: '',
        name: 'John Gonzalez',
        email: 'john.gonzalez@gmail.com',
        type: 'Frontend',
        groups: ["Group 2", "Group 3"],
        age: 26,
        location: 'London, England'
      }
    ]);
    
    const addUser = (user: User) => {
      setUsers([...users, user]);
    };
    
    const deleteUser = (id: number) => {
      setUsers(users.filter(user => user.id !== id));
    };
  
    return (
      <UserContext.Provider value={{ users, addUser, deleteUser }}>
        {children}
      </UserContext.Provider>
    );
  };
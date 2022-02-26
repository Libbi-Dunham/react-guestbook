import { useContext, createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const contextValue = { user, setUser };
  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('has to be within an UserContext Provider');
  }
  return context;
};

export { UserProvider, useUser };

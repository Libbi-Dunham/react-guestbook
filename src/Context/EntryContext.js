import { useContext, createContext, useState } from 'react';

const EntryContext = createContext();

const EntryProvider = ({ children }) => {
  const [entry, setEntry] = useState([]);
  const contextValue = { entry, setEntry };
  return <EntryContext.Provider value={contextValue}>{children}</EntryContext.Provider>;
};

const useEntries = () => {
  const context = useContext(EntryContext);

  if (context === undefined) {
    throw new Error('has to be within an EntryContext Provider');
  }
  return context;
};

export { EntryProvider, useEntries };

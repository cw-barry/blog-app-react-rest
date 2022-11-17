import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  return (
    <AppContext.Provider value={{ token, setToken }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

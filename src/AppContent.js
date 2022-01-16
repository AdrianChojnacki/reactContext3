import { createContext } from 'react';

const AppContext = createContext(defaultObject);

const AppProvider = ({ children }) => {
  returt (
    <AppContext.Provider>
      {children}
    </AppContext.Provider>
  )
};

export default AppProvider;
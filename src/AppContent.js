import { createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isUserLogged, setIsUserLogged] = useState(false);

  const toggleLoggedState = () => setIsUserLogged(prevValue => !prevValue);

  returt (
    <AppContext.Provider value={{ isUserLogged, toggleLoggedState }}>
      {children}
    </AppContext.Provider>
  )
};

export default AppProvider;
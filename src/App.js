import React, { useState } from 'react';

import UserInfo from './UserInfo';
import Button from './Button';

import { AppContext, defaultObject } from './AppContent';

import './App.css';

const App = () => {
  const [isUserLogged, setIsUserLogged] = useState(defaultObject.isUserLogged);
  const [isUserAdult, setIsUserAdult] = useState(true);

  const toggleLoggedState = () => setIsUserLogged(prevValue => !prevValue);
  const toggleAdultState = () => setIsUserAdult(prevValue => !prevValue);

  return (
    <div>
      <AppContext.Provider value={{ isUserLogged, toggleLoggedState }}>
        <UserInfo />
        <Button />
      </AppContext.Provider>
      <AppContext.Provider value={{ isUserAdult, toggleAdultState }}>
        <UserInfo />
        <Button />
      </AppContext.Provider>
    </div>
  );
}

export default App;

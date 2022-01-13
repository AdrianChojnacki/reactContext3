import React, { PureComponent } from 'react';

import UserInfo from './UserInfo';
import Button from './Button';

import { AppContext, defaultObject } from './AppContent';

import './App.css';

class App extends PureComponent {
  state = {
    isUserLogged: defaultObject.isUserLogged,
    isUserAdult: true,
  }

  handleToggleStateIsLogged = () => this.setState(prevState => ({
    isUserLogged: !prevState.isUserLogged,
  }));

  handleToggleStateIsAdult = () => this.setState(prevState => ({
    isUserAdult: !prevState.isUserAdult,
  }));

  render() {
    return (
      <div>
        <UserInfo />
        <Button />
        <AppContext.Provider value={{
          isUserLogged: this.state.isUserAdult,
          toggleLoggedState: this.handleToggleStateIsAdult
        }}>
          <UserInfo />
          <Button />
        </AppContext.Provider>
      </div>
    );
  }
}

export default App;

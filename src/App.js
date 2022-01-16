import React from 'react';

import UserInfo from './UserInfo';
import Button from './Button';

import AppProvider from './AppContent';

import './App.css';

const App = () => (
  <div>
    <AppProvider>
      <UserInfo />
      <Button />
    </AppProvider>
  </div>
);

export default App;

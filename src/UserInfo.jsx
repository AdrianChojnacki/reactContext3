import React, { useContext } from 'react';
import { AppContext } from './AppContent';

const UserInfo = () => {
  const { isUserLogged } = useContext(AppContext);
  const userLoggeInfo = isUserLogged
    ? 'zalogowany'
    : 'niezalogowany';

  return (
    <div>
      {console.log(isUserLogged)}
      <p>
        Użytkownik jest {userLoggeInfo}
      </p>
    </div>
  );
}

export default UserInfo;
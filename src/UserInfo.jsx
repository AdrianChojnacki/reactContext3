import React, { PureComponent } from 'react';
import { AppContext } from './AppContent';

class UserInfo extends PureComponent {
  static contextType = AppContext;

  render() {
    const { isUserLogged } = this.context;
    const userLoggeInfo = isUserLogged ? 'zalogowany' : 'niezalogowany';

    return (
      <div>
        {console.log(isUserLogged)}
        <p>
          Użytkownik jest {userLoggeInfo}
        </p>
      </div>
    );
  }
}

export default UserInfo;
import React, { PureComponent } from "react";
import { AppContext } from "./AppContent";

class Button extends PureComponent {
  render() {
    return (
      <AppContext>
        {
          ({ toggleLoggedState }) => (
            <button onClick={toggleLoggedState}>Przełącz stan użytkownika</button>
          )
        }
      </AppContext>
    );
  }
}

export default Button;
import React, { PureComponent } from "react";
import { AppContext } from "./AppContent";

class Button extends PureComponent {
  render() {
    return (
      <AppContext.Consumer>
        {
          ({ toggleLoggedState }) => (
            <button
              onClick={toggleLoggedState}
            >
              Przełącz stan użytkownika
            </button>
          )
        }
      </AppContext.Consumer>
    );
  }
}

export default Button;
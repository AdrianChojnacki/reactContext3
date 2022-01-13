import React, { PureComponent } from "react";
import { AppContext } from "./AppContent";

class Button extends PureComponent {
  static contextType = AppContext;

  render() {
    return (
      <button
        onClick={this.context.toggleLoggedState}
      >
        Przełącz stan użytkownika
      </button>
    );
  }
}

export default Button;
import React, { Component } from "react";
import EnhancedComponent from "../Counter/Counter.jsx";

export class Button3 extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button
          onClick={incrementCount}
        >
          Button 3 Clicked {count} times
        </button>
      </div>
    );
  }
}

export default EnhancedComponent(Button3);
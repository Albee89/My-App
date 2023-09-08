import React, { Component } from "react";
import EnhancedComponent from "../Counter/Counter.jsx";

export class Button1 extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button
          onClick={incrementCount}
        >
          You're site clicker number {count}! Thanks for visiting!
        </button>
      </div>
    );
  }
}

export default EnhancedComponent(Button1);
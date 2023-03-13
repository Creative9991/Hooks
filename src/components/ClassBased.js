import React, { Component } from "react";

class ClassBased extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mukesh"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ name: "Katipally" });
  }
  render() {
    return (
      <>
        {this.state.name}
        <button onClick={this.handleClick}>Click</button>
      </>
    );
  }
}

export default ClassBased;

import React, { Component } from "react";

class BgEdit extends Component {
  // set state (background color)
  constructor(props) {
    super(props);

    this.state = {
      bgcolor: "gray"
    };

    this.change = this.change.bind(this);
  }

  // 'change' function - changes background color
  change(color) {
    this.setState({
      bgcolor: color
    });
  }

  render() {
    let containerStyle = {
      backgroundColor: this.state.bgcolor,
      height: "10em",
      paddingTop: "20%"
    };

    return (
      <>
        <h1>Change the Background Color!</h1>
        <div style={containerStyle}>
          <button onClick={color => this.change("red")}>Red</button>
          <button onClick={color => this.change("limegreen")}>Green</button>
          <button onClick={color => this.change("blue")}>Blue</button>
        </div>
      </>
    );
  }
}

export default BgEdit;

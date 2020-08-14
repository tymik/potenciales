import React from 'react';
import Model from "./Model";

class App extends React.Component {
  state = { status: false };
  handleClick = e => {
    this.setState(prev => ({ status: !prev.status }));
  };
  render() {
    const { status } = this.state;
    return (
      <>
        <button onClick={this.handleClick}>Click to opent model</button>
        {status && <Model status={status} handleClick={this.handleClick} />}
      </>
    );
  }
}

export default App;
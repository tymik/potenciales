import React from 'react';
import Model, {Model2} from "./Model";

class App extends React.Component {
  state = { status: false };
  state2 = { status2: false };
  handleClick = e => {
    this.setState(prev => ({ status: !prev.status }));
  };
  handleClick2 = e => {
    this.setState(prev => ({ status2: !prev.status2 }));
  };
  render() {
    const { status } = this.state;
    const { status2 } = this.state2;
    return (
      <>
        <button onClick={this.handleClick}>Get ID from Frontend</button>
        {status && <Model status={status} handleClick={this.handleClick} />}
        <button onClick={this.handleClick2}>Get ID from Backend</button>
        {status2 && <Model2 status={status2} handleClick={this.handleClick2} />}
      </>
    );
  }
}

export default App;
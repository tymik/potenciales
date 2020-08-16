import React from 'react';
import Model, {Model2} from "./Model";

class App extends React.Component {

  state = { frontendId: false, backendId: false  };

  handleClick = e => {
    this.setState(prev => ({ frontendId: !prev.frontendId }));
  };
  
  handleClick2 = e => {
    this.setState(prev => ({ backendId: !prev.backendId }));
  };
  
  render() {
    const { frontendId, backendId } = this.state;
    return (
      <>
        <button onClick={this.handleClick}>Get ID from Frontend</button>
        {frontendId && <Model status={frontendId} handleClick={this.handleClick} />}

        <button onClick={this.handleClick2}>Get ID from Backend</button>
        {backendId && <Model2 status={backendId} handleClick={this.handleClick2} />}
      </>
    );
  }
}

export default App;
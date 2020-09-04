import React from "react";
import { FrontendModel, BackendModel } from "./Model";

class App extends React.Component {
  state = { frontendId: false, backendId: false };

  setFrontendId = (e) => {
    this.setState((prev) => ({ frontendId: !prev.frontendId }));
  };

  setBackendId = (e) => {
    this.setState((prev) => ({ backendId: !prev.backendId }));
  };

  render() {
    const { frontendId, backendId } = this.state;
    return (
      <>
        <button onClick={this.setFrontendId}>Get ID from Frontend</button>
        {frontendId && (
          <FrontendModel
            status={frontendId}
            handleClick={this.setFrontendId}
          />
        )}

        <button onClick={this.setBackendId}>Get ID from Backend</button>
        {backendId && (
          <BackendModel status={backendId} handleClick={this.setBackendId} />
        )}
      </>
    );
  }
}

export default App;

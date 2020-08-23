import React, { useState, useEffect } from "react";

const STATES = {
  EMPTY: "EMPTY",
  LOADED: "LOADED",
  ERROR: "ERROR",
};

export function Fetcher() {
  const [state, setState] = useState(STATES.EMPTY);
  const [result, setResult] = useState({
    hostname: null,
  });

  useEffect(() => {
    fetch("http://backend/json/hostname")
      .then((res) => res.json())
      .then(
        (result) => {
          setResult(result);
          setState(STATES.LOADED);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setState(STATES.ERROR);
        }
      );
  }, []);
  if (state === STATES.ERROR) {
    return <div>Error lol get rekt</div>;
    // return <div>Error: {error.message}</div>;
  } else if (state === STATES.EMPTY) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {result.hostname && <li>{result.hostname}</li>}
      </ul>
    );
  }
}
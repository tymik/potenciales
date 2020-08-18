import React, {useState, useEffect} from 'react';

export function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:8080/json/hostname")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  console.log("items should be returned below");
  console.log(items);
  if (error) {
    console.log("here we should be if there's an error");
    console.log(items);
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    console.log("here we should be if json is not yet loaded");
    console.log(items);
    return <div>Loading...</div>;
  } else {
    console.log("here we should be if json is already loaded");
    console.log(items);
    return (
      <ul>
        {items.map(item => (
          <li> {item.hostname} - {item.description}
          </li>
        ))}
      </ul>
    );
    return items;
  }
}


// This one also did not work
// export function MyComponent() {
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(response => response.json())
//       .then(data => console.log(data))
//   }, [])

//   return (
//     <div>
//       <h1>Cool app</h1>
//     </div>
//   )
// }
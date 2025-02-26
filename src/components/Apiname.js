import { useState, useEffect } from "react";

function Name() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setNames(data.map((user) => user.name)));
  }, []);

  return (
      <div className="name-container">
        <h1>Имена:</h1>
      <div className="name-list">
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
        </div>
      </div>
  );
}

export default Name;
